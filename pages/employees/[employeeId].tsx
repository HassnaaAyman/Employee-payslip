function EmployeeDetails({ employee, message }: any) {
  if (message) {
    return <p> {message} </p>;
  }
  return (
    <div>
      {employee.id}. {employee.firstName}
    </div>
  );
}

export default EmployeeDetails;

export async function getServerSideProps(context: { params: any }) {
  const { params } = context;
  const { employeeId } = params;

  const res = await fetch(`http://localhost:3000/api/employees/${employeeId}`);
  const employee = await res.json();
  if (employee.hasOwnProperty("message")) {
    return {
      props: {
        message: employee.message,
      },
    };
  }
  console.log({ employee });

  return {
    props: {
      employee,
    },
  };
}
