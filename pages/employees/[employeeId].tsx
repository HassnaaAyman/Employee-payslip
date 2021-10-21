import { Table, Alert } from "antd";
import { EmployeeDetailsProps } from "../../types";
import { Container, Title } from "../../components";

const EmployeeDetails = ({ employee, message, meta }: EmployeeDetailsProps) => {
  if (message) {
    return (
      <Alert message="Error" description={message} type="error" showIcon />
    );
  }

  const columns = [
    {
      title: "name",
      width: 150,
      render: (record: { firstName: string; lastName: string }) =>
        record.firstName + " " + record.lastName,
    },
    {
      title: "gross-icome",
      dataIndex: "grossIncome",
    },
    {
      title: "income-tax",
      dataIndex: "incomeTax",
    },
    {
      title: "net-income",
      dataIndex: "netIncome",
    },
    {
      title: "incentive-bonus",
      dataIndex: "incentiveBonus",
    },
  ];

  return (
    <Container>
      <Title>Employee Details</Title>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={[{ ...employee, ...meta }]}
        pagination={false}
        scroll={{ y: 240 }}
      />
    </Container>
  );
};

export default EmployeeDetails;

export async function getServerSideProps(context: {
  params: { employeeId: number };
}) {
  const { params } = context;
  const { employeeId } = params;

  const res = await fetch(`http://localhost:3000/api/employees/${employeeId}`);
  const response = await res.json();

  return {
    props: {
      employee: response.employee || {},
      message: response.message || null,
      meta: response.meta || {},
    },
  };
}
