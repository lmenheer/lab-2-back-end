// frontend/src/repositories/employeeRepository.ts
import type { Employee } from "@shared/types/employee";

const API_URL = "http://localhost:3000/api/v1/employees";

export const employeeRepository = {
  async getAll(): Promise<Employee[]> {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch employees");
    return await response.json();
  },
};