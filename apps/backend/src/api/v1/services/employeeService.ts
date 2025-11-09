import  prisma from "../../../../prisma/clients";

export const employeeService = {
  async getAll() {
    return await prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        department: true,
      },
    });
  },

  async getById(id: number) {
    return await prisma.employee.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        department: true,
      },
    });
  },

  async create(data: { name: string; department: string }) {
    return await prisma.employee.create({
      data,
      select: {
        id: true,
        name: true,
        department: true,
      },
    });
  },

  async delete(id: number) {
    return await prisma.employee.delete({
      where: { id },
    });
  },
};