import { useEffect } from 'react';

import AppSite from './AppSite';
import Login from './pages/Login/Login';
import { useAuth } from './contexts/useAuth.js';


export default function Router() {
  const { autenticado } = useAuth();

  useEffect(() => {
    const onPopState = () => {
      window.location.reload();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);


  if (!autenticado) {
    return <Login />;
  }

  return <AppSite />;
}



