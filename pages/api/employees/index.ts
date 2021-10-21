import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../../data/employees";
import { v4 as uuidv4 } from "uuid";

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
  if (req.method === "GET") {
    // res.setHeader("Cache-Control", "max-age=180000");
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const employee = req.body;
    const newEmployee: any = {
      id: uuidv4(),
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
