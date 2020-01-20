import { Role } from "src/modules/users/models/role.enum";
import { SetMetadata } from "@nestjs/common";

export const Roles = (role: Role) => SetMetadata("role", role);
