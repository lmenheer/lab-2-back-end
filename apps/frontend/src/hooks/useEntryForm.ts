import { useState } from "react";
import { validStaffService } from "../services/validateStaffService";
import { employeeRepository } from "../repositories/employeeRespository";
import { roleRepository } from "../repositories/roleRepository";

export function useEntryForm(entryType: "employee" | "role", refreshList: () => void) {
  const [formValues, setFormValues] = useState({ name: "", role: "", department: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    let validation;
    if (entryType === "employee") {
      validation = await validStaffService.validateEmployee(formValues.name);
    } else {
      validation = await validStaffService.validateRole(formValues.name, formValues.role);
    }

    setErrors(validation.errors);

    if (!validation.isValid) {
      setIsSubmitting(false);
      return;
    }

    if (entryType === "employee") {
      await employeeRepository.add(formValues);
    } else {
      await roleRepository.add(formValues);
    }

    setFormValues({ name: "", role: "", department: "" });
    setErrors({});
    refreshList();
    setIsSubmitting(false);
  }

  return { formValues, errors, handleChange, handleSubmit, isSubmitting };
}