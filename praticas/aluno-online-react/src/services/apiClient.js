const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

function getAuthToken() {
  try {
    const stored = localStorage.getItem('auth');
    if (!stored) return null;
    const parsed = JSON.parse(stored);
    return parsed?.token || null;
  } catch {
    return null;
  }
}

async function request(path, options = {}) {
  const headers = { ...(options.headers || {}) };
  if (!headers['Content-Type'] && !(options.body instanceof FormData)) {
    headers['Content-Type'] = DEFAULT_HEADERS['Content-Type'];
  }

  const token = getAuthToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const resp = await fetch(path, { ...options, headers });

  if (resp.status === 401) {
    localStorage.removeItem('auth');
    window.dispatchEvent(new Event('app:unauthorized'));
    const err = new Error('Unauthorized');
    err.status = 401;
    throw err;
  }

  const text = await resp.text();
  const contentType = resp.headers.get('Content-Type') || '';
  const isJson = contentType.includes('application/json');
  const data = isJson && text ? JSON.parse(text) : text;

  if (!resp.ok) {
    const err = new Error('Network response was not ok');
    err.status = resp.status;
    err.data = data;
    throw err;
  }

  return data;
}

export const apiClient = {
  get: (url) => request(url, { method: 'GET' }),
  post: (url, body) => request(url, { method: 'POST', body: JSON.stringify(body) }),
  put: (url, body) => request(url, { method: 'PUT', body: JSON.stringify(body) }),
  del: (url) => request(url, { method: 'DELETE' }),
};
