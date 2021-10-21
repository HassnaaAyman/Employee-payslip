import React from "react";
import { Form, Input, Button, InputNumber, DatePicker } from "antd";
import styled, { StyledComponent } from "styled-components";
import { useRouter } from "next/router";

type Props = {
  firstName: string;
  lastName: string;
  annualSalary: number;
  evaluationRate: number;
  paymentStartDate: Date;
};

const CreateEmployee = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onReset = () => {
    form.resetFields();
  };

  const submitEmployee = async (values: Props) => {
    await fetch("/api/employees", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Container>
      <Title>Create Employee</Title>
      <StyledForm
        form={form}
        name="control-hooks"
        layout="vertical"
        onFinish={async (values: Props) => {
          submitEmployee(values);
          router.push("/Employees");
        }}
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
            min={0}
            max={12}
            formatter={(value: number) => `${value}%`}
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

const StyledInputNumber: StyledComponent<any, any, {}, never> = styled(
  InputNumber
)`
  &.ant-input-number {
    width: 100%;
  }
`;

const StyledForm: StyledComponent<any, any, {}, never> = styled(Form)`
  width: 55%;
`;

const StyledDatePicker = styled(DatePicker)`
  &.ant-picker {
    width: 100%;
  }
`;