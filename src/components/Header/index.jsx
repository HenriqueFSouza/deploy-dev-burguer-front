import { Gear, ShoppingCart, User } from '@phosphor-icons/react';
import { Link, useNavigate, useResolvedPath } from 'react-router-dom';

import { useUser } from '../../hooks/UserContext';
import {
  Container,
  Content,
  Navigation,
  Options,
  Profile,
  HeaderLink,
  LinkContainer,
} from './styles';

export function Header() {
  const navigate = useNavigate();

  const { pathname } = useResolvedPath();
  const { logout, userData } = useUser();

  const logoutUser = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink $isActive={pathname === '/'} to="/">
              Home
            </HeaderLink>
            <HeaderLink $isActive={pathname === '/cardapio'} to="/cardapio">
              Cardápio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <User color="#ffffff" size={24} />
            <div>
              <p>
                Olá, <span>{userData.name}</span>!
              </p>
              <Link onClick={logoutUser}>Sair</Link>
            </div>
          </Profile>
          <LinkContainer>
            <ShoppingCart color="#ffffff" size={24} />
            <HeaderLink to="/carrinho" $isActive={pathname === '/carrinho'}>
              Carrinho
            </HeaderLink>
          </LinkContainer>
          {userData?.admin && (
            <LinkContainer>
              <Gear color="#ffffff" size={24} />
              <HeaderLink to="/pedidos" $isActive={pathname === '/pedidos'}>
                Admin
              </HeaderLink>
            </LinkContainer>
          )}
        </Options>
      </Content>
    </Container>
  );
}
