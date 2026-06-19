<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useEffect } from 'react';
>>>>>>> origin/develop

import AppSite from './AppSite';
import Login from './pages/Login/Login';
import { useAuth } from './contexts/useAuth.js';


export default function Router() {
<<<<<<< HEAD
  const [path, setPath] = useState(window.location.pathname);
  const { autenticado } = useAuth();

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
=======
  const { autenticado } = useAuth();

  useEffect(() => {
    const onPopState = () => {
      window.location.reload();
    };
>>>>>>> origin/develop
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

<<<<<<< HEAD
=======

>>>>>>> origin/develop
  if (!autenticado) {
    return <Login />;
  }

<<<<<<< HEAD
  return <AppSite currentPath={path} onPathChange={setPath} />;
=======
  return <AppSite />;
>>>>>>> origin/develop
}



