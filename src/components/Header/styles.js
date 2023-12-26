import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  height: 72px;
  width: 100%;
  background-color: #1f1f1f;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;

  > img {
    height: 85%;
  }

  div {
    margin-left: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const HeaderLink = styled(Link)`
  color: ${(props) => (props.$isActive ? '#9758a6' : '#ffffff')};
  text-decoration: none;
  font-size: 14px;
  transition: color 100ms;

  &:hover {
    color: #9758a6;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 14px;

  p {
    color: #ffffff;
    line-height: 90%;
    font-weight: 300;

    span {
      font-weight: 700;
      color: #9758a6;
    }
  }

  a {
    color: #ff3205;
    text-decoration: none;
    font-weight: 700;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
