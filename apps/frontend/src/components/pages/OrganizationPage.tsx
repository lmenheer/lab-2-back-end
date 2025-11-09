import { useState, useEffect } from "react";
import type { Role } from "../../repositories/roleRepository";
import { roleRepository } from "../../repositories/roleRepository";
import { useEntryForm } from "../../hooks/useEntryForm";
import { OrganizationList } from "../organizationList/OrganizationList";

export default function OrganizationPage() {
  const [roles, setRoles] = useState<Role[]>([]);
  const form = useEntryForm("role", refreshRoles);

  async function refreshRoles() {
    const data = await roleRepository.getAll();
    setRoles(data);
  }

  useEffect(() => {
    refreshRoles();
  }, []);

  return (
    <main>
      <h1>Organization</h1>
      <form onSubmit={form.handleSubmit}>
        <input
          name="name"
          placeholder="Employee Name"
          value={form.formValues.name}
          onChange={form.handleChange}
        />
        <input
          name="role"
          placeholder="Role"
          value={form.formValues.role}
          onChange={form.handleChange}
        />
        <input
          name="department"
          placeholder="Department"
          value={form.formValues.department}
          onChange={form.handleChange}
        />
        {form.errors.name && <p>{form.errors.name}</p>}
        {form.errors.role && <p>{form.errors.role}</p>}
        <button type="submit">{form.isSubmitting ? "Adding..." : "Add Role"}</button>
      </form>

      <OrganizationList roles={roles} />
    </main>
  );
}