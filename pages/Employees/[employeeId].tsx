import { data } from "../../data/employees";

function EmployeeDetails({ employee }: any) {
  console.log({ employee });

  return (
    <div>
      {employee.id}. {employee.firstName}
    </div>
  );
}

export default EmployeeDetails;

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const { employeetId } = params;

  const newData = data.find(
    (employee: { id: number }) => employee.id === employeetId
  );

  console.log(employeetId, ">>>");

  /** Don't do this 
  const response = await fetch(`http:localhost:3000/api/comments/${commentId}`)
  const data = await response.json()
  */

  return {
    props: {
      newData,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { employeeId: "1" } },
      { params: { employeeId: "2" } },
      { params: { employeeId: "3" } },
    ],
    fallback: false,
  };
}
