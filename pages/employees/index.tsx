import { Table } from "antd";
import { timeStampToDate } from "../../helpers/timeStamptoDate";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useEmployeeContext } from "../../context/state";

const Employees = () => {
  const router = useRouter();
  const { data } = useEmployeeContext();

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
      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 240 }}
      />
    </Container>
  );
};

export default Employees;

const Container = styled.div`
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

const Title = styled.h1`
  color: black;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: start;
  width: 100%;
`;
