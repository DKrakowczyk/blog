import { Role } from "../../users/models/role.enum";

export interface ICurrentUser {
  userId: number;
  userName: string;
  email: string;
  roles: Role;
}
