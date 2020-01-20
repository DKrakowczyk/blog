import { Role } from "../../users/models/role.enum";

export interface ICurrentUser {
  userId: number;
  email: string;
  roles: Role;
}
