import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;

  img {
    height: 80px;
  }

  div {
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    color: #ff8c05;
  }

  strong {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    color: #363636;
  }

  button {
    width: 100%;
    border: 0;
    border-radius: 5px;
    background-color: #9758a6;
    height: 36px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 100ms;

    &:hover {
      background-color: #6f357c;
      border: 1px dashed #ffffff;
    }
  }
`;
