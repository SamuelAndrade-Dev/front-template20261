import { useEffect, useState } from 'react';

import AppSite from './AppSite';
import Login from './pages/Login/Login';
import { useAuth } from './contexts/useAuth.js';


export default function Router() {
  const [path, setPath] = useState(window.location.pathname);
  const { autenticado } = useAuth();

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  if (!autenticado) {
    return <Login />;
  }

  return <AppSite currentPath={path} onPathChange={setPath} />;
}



