import { Inject, Injectable } from "@nestjs/common";
import { compare, hash } from "bcryptjs";
import { GraphQLError } from "graphql";
import { sign, verify } from "jsonwebtoken";
import { Role } from "../users/models/role.enum";
import { User } from "../users/models/user.schema";
import { UserService } from "../users/user.service";
import { Auth } from "./models/auth.schema";

@Injectable()
export class AuthService {
  //
  constructor(
    @Inject(UserService)
    public readonly userService: UserService
  ) {}

  async signUp(
    userName: string,
    email: string,
    password: string,
    role: Role
  ): Promise<User> {
    const hashed = await hash(password, 10);

    const user = await this.userService.add({
      userName: userName,
      email: email,
      password: hashed,
      role: role ? role : Role.StandardUser
    });

    return user;
  }

  async signIn(email: string, password: string): Promise<Auth | GraphQLError> {
    const user = await this.userService.findOneByEmail(email);

    if (!user) return new GraphQLError("Incorrect email or password");

    return compare(password, user.password)
      ? this.createAuthType(user)
      : new GraphQLError("Incorrect email or password");
  }

  async refreshToken(email: string, refreshToken: string) {
    const user = await verify(refreshToken, process.env.JWT_REFRESH_SECRET);
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
    return sign(
      {
        id: user._id.toHexString(),
        userName: user.userName,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        //SEKRET DO ZMIANY NA .ENV
        expiresIn: isRefresh ? parseInt("72600", 10) : parseInt("72600", 10)
      }
    );
  }
}
