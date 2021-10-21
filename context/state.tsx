import { ReactNode, useState, useEffect, useCallback, FC } from "react";
import { createContext, useContext } from "react";
import { DataProps, EmployeeContextType } from "../types";

const EmployeeContextDefaultValues: EmployeeContextType = {
  data: [],
  createEmployee: () => {},
  loading: false,
};

const EmployeeContext = createContext<EmployeeContextType>(
  EmployeeContextDefaultValues
);

export const EmployeeProvider: FC<ReactNode> = ({ children }) => {
  const [data, setData] = useState<Array<DataProps>>([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const fetchData = async () => {
      const res = await fetch("/api/employees");
      const data = await res.json();
      if (res.status === 200) {
        setloading(false);
      } else {
        setloading(false);
      }
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
    setData((prevState) => [...prevState, data]);
  }, []);

  const value = {
    loading,
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
