import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding-right: 20px;
  }
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  position: relative;
  text-align: center;
  margin-bottom: 20px;

  &::after {
    position: absolute;
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;
    bottom: 0;
    left: calc(50% - 28px);
  }
`;
