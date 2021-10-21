import type { NextApiRequest, NextApiResponse } from "next";
import Employee from "../../../models/employee";

const calculateTax = (annualSalary: number): number => {
  if (annualSalary <= 18200) {
    return 0;
  }
  if (annualSalary >= 18200 && annualSalary <= 37000) {
    return annualSalary / 0.19;
  }
  if (annualSalary >= 37001 && annualSalary <= 87000) {
    return annualSalary / (32.5 + 3572 / 100);
  }
  if (annualSalary >= 87001 && annualSalary <= 180000) {
    return annualSalary / (0.37 + 19822 / 100);
  }
  if (annualSalary >= 180001) {
    return annualSalary / (45 + 54232 / 100);
  }

  return 0;
};
const calculateMeta = (annualSalary: number, evaluationRate: number) => {
  const grossIncome = Math.round(annualSalary / 12);
  const incentiveBonus = Math.round(grossIncome * (evaluationRate / 100));
  const incomeTax = Math.round(calculateTax(annualSalary));
  const netIncome = Math.round(grossIncome - incomeTax);
  return { grossIncome, incomeTax, netIncome, incentiveBonus };
};
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
      return res.status(200).json({
        employee,
        meta: calculateMeta(employee.annualSalary, employee.evaluationRate),
      });
    }
  } catch (e) {
    return res.status(404).json({ message: "Not Found" });
  }
}
