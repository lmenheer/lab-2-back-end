import employeesJson from "../data/employees.json";

export interface Employee {
  id: string;
  name: string;
  department: string;
  role?: string;
}

let employees: Employee[] = Object.entries(employeesJson.departments).flatMap(
  ([department, names]) =>
    (names as string[]).map(name => ({
      id: Date.now().toString() + Math.random(),
      name,
      department,
      role: ""
    }))
);

export const employeeRepository = {
  getAll: async () => employees,
  add: async (employee: Omit<Employee, "id">) => {
    employees.push({ id: Date.now().toString() + Math.random(), ...employee });
  },
  clear: async () => { employees = []; }
};