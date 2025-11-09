import { Employee } from "@prisma/client";

export const employeeSeedData: Omit<Employee, 'id'>[] = [
    {
        name:"Zoë Robins",
        department: "Administration",
    },
    {
        name:"Madeleine Madden",
        department: "Administration",
    }
]