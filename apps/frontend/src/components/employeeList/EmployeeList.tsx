import { useEffect, useState } from "react";
import type { Employee } from "@shared/types/employee"; // use shared types
import { employeeRepository } from "../../repositories/employeeRespository"; // your new API repo

interface Props {}

interface DepartmentGroup {
  department: string;
  employees: Employee[];
}

export function EmployeeList({}: Props) {
  const [departmentsEmployees, setDepartmentsEmployees] = useState<DepartmentGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const employees = await employeeRepository.getAll();

        // group by department
        const grouped: Record<string, Employee[]> = {};
        employees.forEach(emp => {
          if (!grouped[emp.department]) grouped[emp.department] = [];
          grouped[emp.department].push(emp);
        });

        const groups: DepartmentGroup[] = Object.entries(grouped).map(
          ([department, employees]) => ({ department, employees })
        );

        setDepartmentsEmployees(groups);
      } catch (err) {
        console.error("Failed to fetch employees:", err);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  if (loading) return <div>Loading employees...</div>;

  return (
    <div id="employee-list">
      {departmentsEmployees.map((group, i) => (
        <div key={i}>
          <h2>{group.department}</h2>
          <ul>
            {group.employees.map(emp => (
              <li key={emp.id} className="employee">
                {emp.name} {emp.role ? `(${emp.role})` : ""}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}