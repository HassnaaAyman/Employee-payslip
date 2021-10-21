export type DataProps = {
  _id: number;
  firstName: string;
  lastName: string;
  annualSalary: number;
  evaluationRate: number;
  paymentStartDate: Date;
};

export type EmployeeDetailsProps = {
  message: string;
  meta: {
    grossIncome: number;
    incomeTax: number;
    netIncome: number;
    incentiveBonus: number;
  };
  employee: DataProps;
};

export type EmployeeContextType = {
  data: Array<DataProps>;
  createEmployee: (c: DataProps) => void;
  loading: boolean;
};
