import { ReactNode, useState } from "react";
import { createContext, useContext } from "react";

type DataProps = {
  firstName: string;
  lastName: string;
  annualSalary: number;
  evaluationRate: number;
  paymentStartDate: Date;
};

type EmployeeContextType = {
  data: Array<{
    firstName: string;
    lastName: string;
    annualSalary: number;
    evaluationRate: number;
    paymentStartDate: Date;
  }>;
  createEmployee: (c: DataProps) => void;
};

type Props = {
  children: ReactNode;
};

const EmployeeContextDefaultValues: EmployeeContextType = {
  data: [
    {
      firstName: "hassnaa",
      lastName: "ayman",
      annualSalary: 120000,
      evaluationRate: 10,
      paymentStartDate: new Date(),
    },
  ],
  createEmployee: () => {},
};

const EmployeeContext = createContext<EmployeeContextType>(
  EmployeeContextDefaultValues
);

export const EmployeeProvider = ({ children }: Props) => {
  const [data, setData] = useState<Array<DataProps>>([
    {
      firstName: "hassnaa",
      lastName: "ayman",
      annualSalary: 120000,
      evaluationRate: 10,
      paymentStartDate: new Date(),
    },
  ]);

  const createEmployee = (formData: Array<DataProps>) => {
    setData((prevState: any) => [...prevState, formData]);
  };

  const value = {
    data,
    createEmployee,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};
