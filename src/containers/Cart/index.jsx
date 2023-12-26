import logoImg from '../../assets/logo.svg';
import { CartItems, CartResume } from '../../components';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={logoImg} alt="Logo Dev Burger" />
      </Banner>
      <Title>Checkout - Finalizar Pedido</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}
