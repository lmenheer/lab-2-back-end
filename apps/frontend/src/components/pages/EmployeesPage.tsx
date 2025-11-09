import { useState, useEffect } from "react";
import type { Employee } from "../../repositories/employeeRespository";
import { employeeRepository } from "../../repositories/employeeRespository";
import { useEntryForm } from "../../hooks/useEntryForm";
import { EmployeeList } from "../employeeList/EmployeeList";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const form = useEntryForm("employee", refreshEmployees);

  async function refreshEmployees() {
    const data = await employeeRepository.getAll();
    setEmployees(data);
  }

  useEffect(() => {
    refreshEmployees();
  }, []);

  return (
    <main>
      <h1>Employees</h1>
      <form onSubmit={form.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.formValues.name}
          onChange={form.handleChange}
        />
        <input
          name="department"
          placeholder="Department"
          value={form.formValues.department}
          onChange={form.handleChange}
        />
        {form.errors.name && <p>{form.errors.name}</p>}
        <button type="submit">{form.isSubmitting ? "Adding..." : "Add Employee"}</button>
      </form>

      <EmployeeList employees={employees} />
    </main>
  );
}