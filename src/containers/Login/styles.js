import styled from 'styled-components';

import leftBackground from '../../assets/background-home.svg';
import rightBackground from '../../assets/background-texture.svg';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${leftBackground}') no-repeat;
  background-size: cover;
  background-position: center;

  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${rightBackground}') no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #61a120;

  p {
    line-height: 80%;
    font-weight: 700;
    font-size: 18;

    a {
      color: #ffffff;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage';
  color: #ffffff;
  font-size: 40px;
  line-height: 100%;

  span {
    font-family: 'Road Rage';
    color: #5c2669;
    font-size: 40px;
    line-height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: 0;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
  }
`;
