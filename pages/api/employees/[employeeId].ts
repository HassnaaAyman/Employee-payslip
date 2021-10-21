import { data } from "../../../data/employees";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { employeeId }: any = req.query;
  if (req.method === "GET") {
    const employee = data.find((employee) => employee.id == employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.status(200).json(employee);
  }
}
