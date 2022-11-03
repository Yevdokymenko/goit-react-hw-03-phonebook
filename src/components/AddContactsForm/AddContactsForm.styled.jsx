import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormWrapper = styled.div`
  padding: 20px 40px;
  background-color: white;
  border-bottom: 2px solid orange;
  text-align: center;
  border-left: 2px solid orange;
  border-right: 2px solid orange;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto 20px;
  text-align: start;
  width: 300px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 500;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  /* align-items: flex-start;
  margin: 0 auto;
  width: 300px; */
`;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  :focus {
    border-color: orange;
  }
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 5px 10px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  border: 1px solid orange;
  background-color: white;
  color: orange;
  background-color: transparent;
  border: 1px solid orange;
  transition: all 100ms linear;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    color: white;
    border-color: black;
    background-color: orange;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 10px;
  color: red;
`;
