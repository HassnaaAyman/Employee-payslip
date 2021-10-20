import { ReactNode, useState } from "react";
import { createContext, useContext } from "react";

type DataProps = {
  firstName: string;
  lastName: string;
  annualSalary: number;
  evaluationRate: string;
  paymentStartSate: Date;
};

type EmployeeContextType = {
  data: {
    firstName: string;
    lastName: string;
    annualSalary: number;
    evaluationRate: string;
    paymentStartSate: Date;
  };
  createEmployee: (c: DataProps) => void;
};

type Props = {
  children: ReactNode;
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

  const createEmployee = (formData: DataProps) => {
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
