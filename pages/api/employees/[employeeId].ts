import { data } from "../../../data/employees";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { employeeId }: any = req.query;
  console.log(req.body, ">>");

  if (req.method === "GET") {
    const employee = data.find(
      (employee) => employee.id === parseInt(employeeId)
    );
    res.status(200).json(employee);
  }
}
