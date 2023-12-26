import styled from 'styled-components';

import bannerProducts from '../../assets/banner-products.svg';

export const Container = styled.main`
  width: 100%;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 480px;
  width: 100%;
  background: url('${bannerProducts}') no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #1f1f1f;

  img {
    height: 80%;
  }

  h1 {
    font-family: 'Road Rage';
    font-size: 80px;
    line-height: 60px;
    color: #ffffff;
    position: absolute;

    right: 20%;
    top: 30%;

    span {
      display: block;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 400;
      color: #ffffff;
    }
  }
`;

export const ProductsContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  max-width: 1280px;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`;

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '2px solid #9758A6'};
  color: ${(props) => (props.$isActiveCategory ? '#9758A6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`;
