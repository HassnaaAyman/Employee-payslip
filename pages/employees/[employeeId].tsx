import { Alert, Descriptions } from "antd";
import { EmployeeDetailsProps } from "../../types";
import { Container, Title } from "../../components";

const EmployeeDetails = ({ employee, message, meta }: EmployeeDetailsProps) => {
  if (message) {
    return (
      <Alert message="Error" description={message} type="error" showIcon />
    );
  }

  return (
    <Container>
      <Title>Employee Details</Title>
      <Descriptions
        bordered
        layout="vertical"
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Name">
          {employee.firstName + " " + employee.lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Gross-Income">
          {meta.grossIncome}
        </Descriptions.Item>
        <Descriptions.Item label="Income-Tax">
          {meta.incomeTax}
        </Descriptions.Item>
        <Descriptions.Item label="Net-Income">
          {meta.netIncome}
        </Descriptions.Item>
        <Descriptions.Item label="Incentive-Bonus">
          {meta.incentiveBonus}
        </Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default EmployeeDetails;

export async function getServerSideProps(context: {
  params: { employeeId: number };
}) {
  const { params } = context;
  const { employeeId } = params;

  const res = await fetch(`${process.env.APP_URL}/employees/${employeeId}`);
  const response = await res.json();

  return {
    props: {
      employee: response.employee || {},
      message: response.message || null,
      meta: response.meta || {},
    },
  };
}
