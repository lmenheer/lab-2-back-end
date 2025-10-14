import organizationJson from "../data/organization.json";

export interface Role {
  id: string;
  department: string;
  role: string;
  name: string;
}

let roles: Role[] = Object.entries(organizationJson).flatMap(([department, rolesObj]) =>
  Object.entries(rolesObj as Record<string, string>).map(([role, name]) => ({
    id: Date.now().toString() + Math.random(),
    department,
    role,
    name
  }))
);

export const roleRepository = {
  getAll: async () => roles,
  add: async (role: Omit<Role, "id">) => {
    roles.push({ id: Date.now().toString() + Math.random(), ...role });
  },
  clear: async () => { roles = []; }
};