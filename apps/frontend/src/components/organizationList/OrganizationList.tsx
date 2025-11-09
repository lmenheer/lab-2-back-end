import type { Role } from "../../repositories/roleRepository";

interface Props {
  roles: Role[];
}

interface DepartmentRole {
  department: string;
  roles: { title: string; name: string }[];
}

export function OrganizationList({ roles }: Props) {
  const departmentsRoles: DepartmentRole[] = [];

  const populateDepartments = () => {
    const grouped: Record<string, { title: string; name: string }[]> = {};
    roles.forEach(role => {
      if (!grouped[role.department]) grouped[role.department] = [];
      grouped[role.department].push({ title: role.role, name: role.name });
    });
    for (const dept of Object.keys(grouped)) {
      departmentsRoles.push({ department: dept, roles: grouped[dept] });
    }
  };

  populateDepartments();

  return (
    <div id="organization-list">
      {departmentsRoles.map((dept, i) => (
        <div key={i} className="department-box">
          <h2>{dept.department}</h2>
          <ul>
            <li className="employee">
              {dept.roles.map((r, j) => (
                <div key={j} className="role-box">
                  <strong>{r.title}</strong>: {r.name}
                </div>
              ))}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}