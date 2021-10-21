import { Schema, model, models } from "mongoose";

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  annualSalary: {
    type: Number,
    required: true,
  },
  evaluationRate: {
    type: Number,
    required: true,
  },
  paymentStartDate: {
    type: Date,
    default: Date.now(),
  },
});

const Employee = models.Employee || model("Employee", schema);

export default Employee;
