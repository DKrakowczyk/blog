import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import { Reflector } from "@nestjs/core";
import { Role } from "../../users/models/role.enum";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const role = this.reflector.get<Role>("role", context.getHandler());

    if (!role) {
      return true;
    }
    console.log(context);
    const ctx = context.getArgByIndex(2);
    const user = ctx.user;
    console.log(ctx);
    const hasRole = () => user.role == role;

    if (user && user.role && hasRole()) {
      return true;
    }

    return false;
  }
}
