const API_URL = 'http://localhost:3000/requerimentos';

export async function listarRequerimentos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Erro ao listar requerimentos: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar requerimentos:', error);
    throw error;
  }
}

export async function criarRequerimento(requerimento) {
  try {
    const dados = {
      ...requerimento,
      status: 'Pendente',
      criadoEm: new Date().toISOString(),
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar requerimento: ${response.status}`);
    }

    const novoRequerimento = await response.json();
    return novoRequerimento;
  } catch (error) {
    console.error('Erro ao criar requerimento:', error);
    throw error;
  }
}

export async function obterRequerimento(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Erro ao obter requerimento: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar requerimento:', error);
    throw error;
  }
}

export async function atualizarRequerimento(id, requerimento) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requerimento),
    });

    if (!response.ok) {
      throw new Error(`Erro ao atualizar requerimento: ${response.status}`);
    }

    const requerimentoAtualizado = await response.json();
    return requerimentoAtualizado;
  } catch (error) {
    console.error('Erro ao atualizar requerimento:', error);
    throw error;
  }
}

export async function deletarRequerimento(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Erro ao deletar requerimento: ${response.status}`);
    }
  } catch (error) {
    console.error('Erro ao deletar requerimento:', error);
    throw error;
  }
}
