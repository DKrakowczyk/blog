import { Resolver, Mutation, Args, Context } from "@nestjs/graphql";
import { Auth } from "./models/auth.schema";
import { AuthService } from "./auth.service";
import { AddUserInput } from "../users/models/add-user.input";
import { User } from "../users/models/user.schema";
import { ICurrentUser } from "./interfaces/current-user.interface";
import { SignInUserInput } from "./models/sign-in-user.input";

@Resolver(() => Auth)
export class AuthResolver {
  //
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async signIn(@Args("credentials") credentials: SignInUserInput) {
    return this.authService.signIn(credentials.email, credentials.password);
  }

  @Mutation(() => Auth)
  async refreshToken(
    @Context("user") user: ICurrentUser,
    @Args("refreshToken") refreshToken: string
  ) {
    const userObj = await this.authService.refreshToken(
      user.email,
      refreshToken
    );
    return this.authService.createAuthType(userObj);
  }

  @Mutation(() => User, { nullable: true })
  async signUp(@Args("credentials") credentials: AddUserInput) {
    return this.authService.signUp(
      credentials.userName,
      credentials.email,
      credentials.password
    );
  }
}
