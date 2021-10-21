import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import Employee from "../../../models/employee";

type Data = {
  firstName: string;
  lastName: string;
  annualSalary: number;
  evaluationRate: number;
  paymentStartDate: Date;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) => {
  if (req.method === "GET") {
    res.status(200).json(await Employee.find().exec());
  } else if (req.method === "POST") {
    const body = req.body;
    const employee: any = new Employee({
      firstName: body.firstName,
      lastName: body.lastName,
      annualSalary: body.annualSalary,
      evaluationRate: body.evaluationRate,
      paymentStartDate: body.paymentStartDate,
    });

    res.status(201).json(await employee.save());
  }
};
export default connectDB(handler);
