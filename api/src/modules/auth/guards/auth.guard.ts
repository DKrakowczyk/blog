import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import * as jwt from "jsonwebtoken";
import { ICurrentUser } from "../interfaces/current-user.interface";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    return this.handleContext(context);
  }
  private async handleContext(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // First check for auth header in request
    if (request) {
      if (!request.headers.authorization) {
        return true;
      }
      const user = await this.validateToken(request.headers.authorization);
      if (!user) return true;
      request.user = user;
      return true;
      // if not found, switch to nest gql context
    } else {
      const ctx: any = GqlExecutionContext.create(context).getContext();
      if (!ctx.headers.authorization) {
        return true;
      }
      const user = await this.validateToken(ctx.headers.authorization);
      if (!user) return true;
      ctx.user = user;
      return true;
    }
  }
  private async validateToken(authHeader: string): Promise<ICurrentUser> {
    try {
      const token = authHeader.split(" ")[1];
      const user = jwt.verify(token, process.env.JWT_SECRET) as ICurrentUser;
      return user;
    } catch (err) {
      return null;
    }
  }
}
