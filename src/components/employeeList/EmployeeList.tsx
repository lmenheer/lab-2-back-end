import type { Employee } from "../../repositories/employeeRespository";

interface Props {
  employees: Employee[];
}

export function EmployeeList({ employees }: Props) {
  const departmentsEmployees: { department: string; employees: string[] }[] = [];

  const populateDepartments = () => {
    const grouped: Record<string, string[]> = {};
    employees.forEach(emp => {
      if (!grouped[emp.department]) grouped[emp.department] = [];
      grouped[emp.department].push(emp.name);
    });
    for (const dept of Object.keys(grouped)) {
      departmentsEmployees.push({ department: dept, employees: grouped[dept] });
    }
  };

  populateDepartments();

  return (
    <div id="employee-list">
      {departmentsEmployees.map((x, i) => (
        <div key={i}>
          <h2>{x.department}</h2>
          <ul>
            <li className="employee">
              {x.employees.map((y, j) => (
                <div key={j}>{y}</div>
              ))}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}