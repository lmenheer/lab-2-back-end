// src/api/v1/controllers/employeeController.ts
import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getAllEmployees = async (_req: Request, res: Response) => {
  try {
    const employees = await employeeService.getAll();
    res.json(employees);
  } catch (err) {
    console.error("Error fetching employees:", err);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};
