import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginCardForm } from './styles';
import { useUserStore } from '../../store/auth';

import InputField from '../../ui/InputField';
import Button from '../../ui/Button';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { username: 'emilys', password: 'emilyspass' },
  });
  const { login, error, isLoading } = useUserStore((state) => state);

  // Function to handle login submission
  const handleLogin = async (data) => {
    try {
      await login(data.username, data.password);
      navigate('/profile');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginCardForm onSubmit={handleSubmit(handleLogin)}>
      <InputField
        type="text"
        name="username"
        placeholder="Usuario"
        register={register}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Contraseña"
        register={register}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Autenticando...' : 'Autenticar'}
      </Button>
    </LoginCardForm>
  );
};

export default Login;
