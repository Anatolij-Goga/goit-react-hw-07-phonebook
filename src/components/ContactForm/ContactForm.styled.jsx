import { Form, Field, Formik } from 'formik';
import styled from '@emotion/styled';

const FormikContainer = styled(Formik)``;

const FormContainer = styled(Form)`
  background-image: linear-gradient(to right, #553c9a 45%, #ee4b2b);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  color: #fff;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const InputName = styled(Field)`
  margin-left: 26px;
`;

const InputNumber = styled(InputName)`
  margin-left: 10px;
`;

const FormButton = styled.button`
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  &:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  &:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;
export {
  FormikContainer,
  FormContainer,
  FormLabel,
  InputName,
  InputNumber,
  FormButton,
};
