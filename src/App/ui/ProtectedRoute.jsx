import { Navigate } from 'react-router-dom';
import { useUserStore } from '../store/auth';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { isAuthenticated, auth, checkingAuth } = useUserStore(
    (state) => state
  );

  useEffect(() => {
    auth();
  }, [auth]);

  if (checkingAuth) {
    return <div>Cargando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
