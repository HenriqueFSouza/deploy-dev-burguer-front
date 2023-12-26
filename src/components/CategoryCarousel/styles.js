import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 20px;
  }
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 20px 8px;
  width: 100%;
  height: 220px;
  border-radius: 8px;
  background: ${(props) => `url(${props.$url}) no-repeat`};
  background-size: cover;
  background-position: center;
`;

export const Button = styled(Link)`
  background-color: #1f1f1f95;
  color: #ffffff;
  text-decoration: none;
  padding: 4px 20px;
  border-radius: 9999px;
  transition: background-color 100ms;

  &:hover {
    background-color: #9758a6;
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #9758a6;
  position: relative;
  text-align: center;
  margin-bottom: 20px;

  &::after {
    position: absolute;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #9758a6;
    bottom: 0;
    left: calc(50% - 28px);
  }
`;
