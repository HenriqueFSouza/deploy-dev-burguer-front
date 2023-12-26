import styled from 'styled-components';

export const Container = styled.div``;

export const ProductImg = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;
  background-color: #f3f3f3;
`;

export const EditButton = styled.button`
  border: 0;
  background-color: #f3f3f3;
  height: 32px;
  width: 32px;
  border-radius: 8px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 100ms;

  svg {
    width: 16px;
    height: 16px;
    transition: all 100ms;
  }

  &:hover {
    background-color: #9758a6;

    svg {
      fill: #ffffff;
    }
  }
`;
