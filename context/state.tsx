import { ReactNode, useState } from "react";
import { createContext, useContext } from "react";

export type EmployeeContextType = {
  data: {
    firstName: string;
    lastName: string;
    annualSalary: number;
    evaluationRate: string;
    paymentStartSate: Date;
  };
  createEmployee: (c: string) => void;
};

type Props = {
  children: ReactNode;
};

type DataProps = {
  firstName: string;
  lastName: string;
  annualSalary: number;
  evaluationRate: string;
  paymentStartSate: Date;
};

const EmployeeContextDefaultValues: EmployeeContextType = {
  data: {
    firstName: "hassnaa",
    lastName: "ayman",
    annualSalary: 120000,
    evaluationRate: "10%",
    paymentStartSate: new Date(),
  },
  createEmployee: () => {},
};

const EmployeeContext = createContext<EmployeeContextType>(
  EmployeeContextDefaultValues
);

export const EmployeeProvider = ({ children }: Props) => {
  const [data, setData] = useState<DataProps>({
    firstName: "hassnaa",
    lastName: "ayman",
    annualSalary: 120000,
    evaluationRate: "10%",
    paymentStartSate: new Date(),
  });

  const createEmployee = (formData) => {
    setData(formData);
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
