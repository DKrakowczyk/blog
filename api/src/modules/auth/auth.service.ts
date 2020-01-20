import { Injectable, Inject } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { AddUserInput } from "../users/models/add-user.input";
import { Roles } from "./decorators/roles.decorator";
import { Role } from "../users/models/role.enum";
import { GraphQLError } from "graphql";
import { sign, verify } from "jsonwebtoken";
import { Auth } from "./models/auth.schema";
import { User } from "../users/models/user.schema";
import { compare, hash } from "bcryptjs";

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService)
    public readonly userService: UserService
  ) {}
  async signUp(
    userName: string,
    email: string,
    password: string
  ): Promise<any> {
    const hashed = await hash(password, 10);

    const user = await this.userService.add({
      userName: userName,
      email: email,
      password: hashed,
      role: Role.StandardUser
    });

    return user;
  }
  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (!user) return new GraphQLError("Incorrect email or password");

    return compare(password, user.password)
      ? this.createAuthType(user)
      : new GraphQLError("Incorrect email or password");
  }

  async refreshToken(email: string, refreshToken: string) {
    const user = await verify(refreshToken, "aaaaa");
    if (user && user.email === email)
      return await this.userService.findOneByEmail(email);
    else return null;
  }
  // WYCIAGNAC DO ENVA
  createAuthType(user): Auth {
    return new Auth(
      this.createJwt(user.toJSON(), false),
      this.createJwt(user.toJSON(), true),
      parseInt("600", 10) / 60, // return in minutes
      parseInt("600", 10) / 60
    );
  }

  createJwt(user: User, isRefresh: boolean = false): any {
    return sign({ id: user._id.toHexString(), email: user.email }, "aaaaa", {
      //SEKRET DO ZMIANY NA .ENV
      expiresIn: isRefresh ? parseInt("600", 10) : parseInt("600", 10)
    });
  }
}
