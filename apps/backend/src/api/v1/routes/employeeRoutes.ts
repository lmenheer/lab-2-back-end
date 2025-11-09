// src/api/v1/routes/employeeRoutes.ts
import { Router } from "express";
import { getAllEmployees } from "../controllers/employeeController";

const router = Router();

// GET /api/v1/employees
router.get("/", getAllEmployees);

export default router;
