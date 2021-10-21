import type { NextApiRequest, NextApiResponse } from "next";
import Employee from "../../../models/employee";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { employeeId }: any = req.query;
  try {
    if (req.method === "GET") {
      const employee = await Employee.findById(employeeId).exec();
      if (!employee) {
        return res.status(404).json({ message: "Not Found" });
      }
      return res.status(200).json(employee);
    }
  } catch (e) {
    return res.status(404).json({ message: "Not Found" });
  }
}
