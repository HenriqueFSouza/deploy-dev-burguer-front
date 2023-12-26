import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';
import { Button } from '../../components';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo 6 digítos'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post('/sessions', {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu e-mail e senha 🤯',
      },
    );

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos');
      } else {
        navigate('/');
      }
    }, 1000);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logoImg} alt="DevBurger Logo" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo á <span>Code Burguer!</span>
          <br />
          Acesse com seu <span>login e senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            {errors?.email?.message && <span>{errors?.email.message}</span>}
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            {errors?.password?.message && (
              <span>{errors?.password.message}</span>
            )}
          </InputContainer>
          <Button>ENTRAR</Button>
          <p>
            Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
