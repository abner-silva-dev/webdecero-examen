import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUserStore } from '../store/auth';
import Button from './Button';

function Header() {
  const navigate = useNavigate();
  const { logout } = useUserStore((state) => state);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <HeaderStyled>
      <Button onClick={handleLogout}>Cerrar sesion</Button>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
export default Header;
