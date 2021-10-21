import { Table } from "antd";
import { useRouter } from "next/router";
import { timeStampToDate } from "../../helpers/timeStamptoDate";
import { useEmployeeContext } from "../../context/state";
import { Container, Title, StyledButton } from "../../components";

const Employees = () => {
  const router = useRouter();
  const { data, loading } = useEmployeeContext();

  const columns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      width: 150,
      render: (text: string, record: { _id: number }) => (
        <a onClick={() => router.push(`employees/${record._id}`)}> {text}</a>
      ),
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      width: 150,
    },
    {
      title: "AnnualSalary",
      dataIndex: "annualSalary",
    },
    {
      title: "EvaluationRate",
      dataIndex: "evaluationRate",
      render: (text: string) => text + " " + "%",
    },
    {
      title: "PaymentStartDate",
      dataIndex: "paymentStartDate",
      render: (text: string) => timeStampToDate(text),
    },
  ];

  return (
    <Container>
      <Title> Employees</Title>
      <StyledButton
        type="primary"
        onClick={() => router.push("/employees/create")}
      >
        Create Employee
      </StyledButton>
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 240 }}
        loading={loading}
      />
    </Container>
  );
};

export default Employees;
