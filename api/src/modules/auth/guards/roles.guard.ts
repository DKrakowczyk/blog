import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "../../users/models/role.enum";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    // User can only have one role
    const role = this.reflector.get<Role>("role", context.getHandler());
    console.log(role);
    if (!role) {
      return true;
    }
    const ctx = context.getArgByIndex(2);
    const user = ctx.user;
    const hasRole = () => user.role == role;

    if (user && user.role && hasRole()) {
      return true;
    }
    return false;
  }
}
