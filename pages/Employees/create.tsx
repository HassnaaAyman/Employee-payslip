import React from "react";
import { Form, Input, Button, InputNumber, DatePicker } from "antd";
import styled from "styled-components";
import { useEmployeeContext } from "../../context/state";

const CreateEmployee = () => {
  const [form] = Form.useForm();
  const { createEmployee } = useEmployeeContext();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Container>
      <Title>Create Employee</Title>
      <StyledForm
        form={form}
        name="control-hooks"
        layout="vertical"
        onFinish={(values) => createEmployee(values)}
      >
        <Form.Item
          name="firstName"
          label="FirstName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="LastName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="annualSalary"
          label="AnnualSalary"
          rules={[{ required: true }]}
        >
          <StyledInputNumber min={0} />
        </Form.Item>

        <Form.Item
          name="evaluationRate"
          label="EvaluationRate"
          rules={[{ required: true }]}
        >
          <StyledInputNumber
            defaultValue={0}
            min={0}
            max={12}
            formatter={(value) => `${value}%`}
            parser={(value?: string) => value?.replace("%", "")}
          />
        </Form.Item>

        <Form.Item
          label="DatePicker"
          name="paymentStartDate"
          rules={[{ required: true }]}
        >
          <StyledDatePicker />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </StyledForm>
    </Container>
  );
};

export default CreateEmployee;

const Container = styled.div`
  width: 90%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: black;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  width: 100%;
`;

const StyledInputNumber = styled(InputNumber)`
  &.ant-input-number {
    width: 100%;
  }
`;

const StyledForm = styled(Form)`
  width: 55%;
`;

const StyledDatePicker = styled(DatePicker)`
  &.ant-picker {
    width: 100%;
  }
`;
