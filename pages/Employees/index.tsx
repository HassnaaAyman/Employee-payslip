import { useEffect, useState } from "react";
import { Table } from "antd";
import { timeStampToDate } from "../../helpers/timeStamptoDate";
import styled from "styled-components";
import { useRouter } from "next/router";

const Employees = () => {
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("/api/employees");
      const data = await response.json();
      setData(data);
    };
    fetchComments();
  }, []);

  const columns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      width: 150,
      render: (text: string, record: { id: number }) => (
        <a onClick={() => router.push(`employees/${record.id}`)}> {text}</a>
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
