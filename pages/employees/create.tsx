import React from "react";
import { Form, Input, Button, notification } from "antd";
import { useRouter } from "next/router";
import { useEmployeeContext } from "../../context/state";
import { DataProps } from "../../types";
import {
  Container,
  Title,
  StyledForm,
  StyledInputNumber,
  StyledDatePicker,
} from "../../components";

const CreateEmployee = () => {
  const [form] = Form.useForm();
  const router = useRouter();
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
        onFinish={async (values: Exclude<DataProps, "_id">) => {
          createEmployee(values);
          notification.success({
            placement: "topRight",
            bottom: 50,
            duration: 1,
            message: "success",
          });

          router.push("/employees");
        }}
      >
        <Form.Item
          name="firstName"
          label="FirstName"
          rules={[
            {
              required: true,
              pattern: /^[a-z\s]{0,255}$/i,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="LastName"
          rules={[
            {
              required: true,
              pattern: /^[a-z\s]{0,255}$/i,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="annualSalary"
          label="AnnualSalary"
          rules={[
            {
              type: "number",
              min: 0,
              required: true,
            },
          ]}
        >
          <StyledInputNumber min={0} />
        </Form.Item>

        <Form.Item
          name="evaluationRate"
          label="EvaluationRate"
          rules={[{ required: true, type: "number", min: 0, max: 12 }]}
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
          rules={[{ required: true, type: "date" }]}
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
