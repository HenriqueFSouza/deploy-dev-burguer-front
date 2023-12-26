import { SignOut } from '@phosphor-icons/react';
import { useResolvedPath } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import { useUser } from '../../hooks/UserContext';
import { navLinks } from './navLinks';
import { Container, NavLinkContainer, NavLink } from './styles';

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  const logoutUser = () => {
    logout();
  };

  return (
    <Container>
      <img src={logoImg} alt="Devburger Logo" />
      <NavLinkContainer>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.id}
            to={navLink.path}
            $isActive={pathname === navLink.path}
          >
            {navLink.icon}
            <span>{navLink.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <footer>
        <NavLink to="/login" onClick={logoutUser}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </footer>
    </Container>
  );
}
