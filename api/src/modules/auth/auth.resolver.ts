import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { AddUserInput } from "../users/models/add-user.input";
import { User } from "../users/models/user.schema";
import { AuthService } from "./auth.service";
import { ICurrentUser } from "./interfaces/current-user.interface";
import { Auth } from "./models/auth.schema";
import { SignInUserInput } from "./models/sign-in-user.input";

@Resolver(() => Auth)
export class AuthResolver {
  //
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async signUp(@Args("signUp") signUp: AddUserInput): Promise<User> {
    return this.authService.signUp(
      signUp.userName,
      signUp.email,
      signUp.password,
      signUp.role
    );
  }

  @Mutation(() => Auth)
  async signIn(
    @Args("signIn") signIn: SignInUserInput
  ): Promise<Auth | GraphQLError> {
    return this.authService.signIn(signIn.email, signIn.password);
  }

  @Mutation(() => Auth)
  async refreshToken(
    @Context("user") user: ICurrentUser,
    @Args("refreshToken") refreshToken: string
  ): Promise<Auth> {
    const userObj = await this.authService.refreshToken(
      user.email,
      refreshToken
    );
    return this.authService.createAuthType(userObj);
  }
}
