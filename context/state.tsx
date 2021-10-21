import { ReactNode, useState, useEffect, useCallback } from "react";
import { createContext, useContext } from "react";

type DataProps = {
  id?: number;
  firstName: string;
  lastName: string;
  annualSalary: number;
  evaluationRate: number;
  paymentStartDate: Date;
};

type EmployeeContextType = {
  data: Array<{
    id: number;
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
  data: [],
  createEmployee: () => {},
};

const EmployeeContext = createContext<EmployeeContextType>(
  EmployeeContextDefaultValues
);

export const EmployeeProvider = ({ children }: Props) => {
  const [data, setData] = useState<Array<DataProps>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/employees");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  const createEmployee = useCallback(async (formData: DataProps) => {
    const res = await fetch("/api/employees", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setData((prevState: any) => [...prevState, data]);
  }, []);

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
