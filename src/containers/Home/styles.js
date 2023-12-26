import styled from 'styled-components';

import background from '../../assets/background-texture.svg';
import bannerBackground from '../../assets/banner.svg';

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 480px;
  width: 100%;
  background: url('${bannerBackground}') no-repeat;
  background-size: cover;
  background-position: center;

  img {
    height: 80%;
  }

  h1 {
    font-family: 'Road Rage';
    font-size: 80px;
    color: #ffffff;
    position: absolute;

    right: 20%;
    top: 10%;
  }
`;

export const Container = styled.section`
  width: 100%;
  background-color: #f4f4f4;
  background: url('${background}');
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  width: 100%;
  max-width: 1280px;
  padding: 40px 20px;
  margin: 0 auto;
`;
