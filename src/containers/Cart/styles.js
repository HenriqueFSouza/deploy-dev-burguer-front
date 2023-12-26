import styled from 'styled-components';

import texture from '../../assets/texture.svg';

export const Banner = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 40px;

  height: 180px;
  width: 100%;
  background: url('${texture}') no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1f1f1f;

  img {
    position: absolute;
    left: 15%;
    bottom: -50px;
    height: 200px;
  }
`;

export const Container = styled.main`
  width: 100%;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export const Content = styled.section`
  margin: 0 auto;
  padding: 40px;
  max-width: 1280px;

  display: grid;
  grid-template-columns: 1fr 28%;
  gap: 24px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;

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
