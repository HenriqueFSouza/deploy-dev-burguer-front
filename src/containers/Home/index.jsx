import logoImg from '../../assets/logo.svg';
import { CategoryCarousel, OffersCarousel } from '../../components';
import { Banner, Container, Content } from './styles';

export function Home() {
  return (
    <main>
      <Banner>
        <img src={logoImg} alt="Logo DevBurger" />
        <h1>Bem-vindo!</h1>
      </Banner>
      <Container>
        <Content>
          <CategoryCarousel />
          <OffersCarousel />
        </Content>
      </Container>
    </main>
  );
}
