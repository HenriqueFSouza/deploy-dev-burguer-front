import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;
  background-color: #f3f3f3;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #ffffff;
    border-radius: 4px;
    background: #9758a6;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: all 100ms;

    &:hover {
      background-color: #6f357c;
    }
  }
`;

export const EmptyCart = styled.p`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;
