import Login from './Views/Login/Login';
import Profile from './Views/Profile/Profile';
import Errors from './ui/Errors';
import Header from './ui/Header';
import Layout from './ui/Layout';
import ProtectedRoute from './ui/ProtectedRoute';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Errors />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <Header />
                <Outlet />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
