import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data/employees";

type Data = {
  firstName: string;
  lastName: string;
  annualSalary: number;
  evaluationRate: number;
  paymentStartDate: Date;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) {
  console.log({ data });

  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const employee = req.body;
    const newEmployee: any = {
      id: Date.now(),
      firstName: employee.firstName,
      lastName: employee.lastName,
      annualSalary: employee.annualSalary,
      evaluationRate: employee.evaluationRate,
      paymentStartDate: employee.paymentStartDate,
    };
    data.push(newEmployee);
    res.status(201).json(newEmployee);
  }
}
