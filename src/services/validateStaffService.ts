import { roleRepository } from "../repositories/roleRepository";

export const validStaffService = {
  async validateEmployee(name: string) {
    const errors: Record<string, string> = {};
    if (!name || name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    return { isValid: Object.keys(errors).length === 0, errors };
  },

  async validateRole(name: string, role: string) {
    const errors: Record<string, string> = {};
    if (!name || name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters";
    }
    if (!role || role.trim().length < 3) {
      errors.role = "Role must be at least 3 characters";
    }

    const existingRoles = await roleRepository.getAll();
    if (existingRoles.some(r => r.role.toLowerCase() === role.toLowerCase())) {
      errors.role = "This role is already filled";
    }

    return { isValid: Object.keys(errors).length === 0, errors };
  }
};