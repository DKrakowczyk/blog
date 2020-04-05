import { SetMetadata } from "@nestjs/common";
import { Role } from "src/modules/users/models/role.enum";

export const Roles = (role: Role) => SetMetadata("role", role);
