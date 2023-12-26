import ReactSelect from 'react-select';
import styled from 'styled-components';

import { Button } from '../../../components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  background-color: #363636;
  padding: 32px;
  border-radius: 20px;
  width: 100%;
  max-width: 380px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  height: 52px;
  border-radius: 5px;
  padding: 0 12px;
`;

export const Select = styled(ReactSelect)`
  > div {
    height: 52px;
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 600;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  color: #ffffff;

  > svg {
    width: 20px;
    height: 20px;
    fill: #ffffff;
    margin-right: 4px;
  }

  > input {
    display: none;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  line-height: 80%;
  color: #cf3057;
  font-weight: 600;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
