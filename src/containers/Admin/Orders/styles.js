import styled from '@emotion/styled';
import ReactSelect from 'react-select';

export const Container = styled.section``;

export const ProductImg = styled.img`
  height: 80px;
  padding: 12px;
  border-radius: 16px;
  background-color: #f3f3f3;
`;

export const SelectStatus = styled(ReactSelect)`
  width: 240px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 28px;
`;

export const FilterOption = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.$isActiveFilter && '2px solid #9758A6'};
  color: ${(props) => (props.$isActiveFilter ? '#9758A6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`;
