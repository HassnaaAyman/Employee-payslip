import styled, { StyledComponent } from "styled-components";
import { Button, InputNumber, DatePicker, Form } from "antd";

export const Container = styled.div`
  width: 90%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: black;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: start;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: fit-content;
  margin-bottom: 20px;
  alig-items: center;
`;

export const StyledInputNumber: StyledComponent<any, any, {}, never> = styled(
  InputNumber
)`
  &.ant-input-number {
    width: 100%;
  }
`;

export const StyledForm: StyledComponent<any, any, {}, never> = styled(Form)`
  width: 55%;
`;

export const StyledDatePicker = styled(DatePicker)`
  &.ant-picker {
    width: 100%;
  }
`;
