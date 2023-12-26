import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';
import { Button } from '../../components';
import { api } from '../../services/api';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Register() {
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo 6 digítos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password,
        },
        { validateStatus: () => true },
      );

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso');
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (status === 409) {
        toast.error('E-mail já cadastrado! Faça login para continuar');
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Falha no sistema! Tente novamente');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logoImg} alt="DevBurger Logo" />
      </LeftContainer>

      <RightContainer>
        <Title>
          <span>Criar conta</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputContainer>
            <label>Nome completo</label>
            <input type="text" {...register('name')} />
            {errors?.name?.message && <span>{errors?.name.message}</span>}
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password" {...register('confirmPassword')} />
            {errors?.confirmPassword?.message && (
              <span>{errors?.confirmPassword.message}</span>
            )}
          </InputContainer>
          <Button>CONFIRMAR CADASTRO</Button>
          <p>
            Já possui conta? <Link to="/login">Entrar.</Link>
          </p>
        </Form>
      </RightContainer>
    </Container>
  );
}
