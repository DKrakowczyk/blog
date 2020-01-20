import * as jwt from "jsonwebtoken";

import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

import { GqlExecutionContext } from "@nestjs/graphql";
import { ICurrentUser } from "../interfaces/current-user.interface";
import { Reflector } from "@nestjs/core";
import { Role } from "src/modules/users/models/role.enum";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return this.standardFlow(context);
  }
  private async standardFlow(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // First check for auth header in request
    if (request) {
      if (!request.headers.authorization) {
        return false;
      }
      const user = await this.validateToken(request.headers.authorization);
      if (!user) return false;
      request.user = user;
      return true;
      // if not found, switch to nest gql context
    } else {
      const ctx: any = GqlExecutionContext.create(context).getContext();
      console.log(ctx);
      if (!ctx.headers.authorization) {
        return false;
      }
      const user = await this.validateToken(ctx.headers.authorization);
      console.log(user);
      if (!user) return false;
      ctx.user = user;
      return true;
    }
  }
  private async validateToken(authHeader: string): Promise<ICurrentUser> {
    try {
      const token = authHeader.split(" ")[1];
      const user = jwt.verify(token, "aaaaa") as ICurrentUser;
      return user;
    } catch (err) {
      return null;
    }
  }
}
