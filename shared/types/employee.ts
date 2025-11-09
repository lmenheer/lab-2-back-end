export type Employee = {
  id: number;
  name: string;
  department: string;
  role?: Role;
};

export type Role = {
  id: number;
  name: string;
};
