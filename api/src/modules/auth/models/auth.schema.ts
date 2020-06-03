import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "The Auth model" })
export class Auth {
  constructor(
    token: string,
    refreshToken: string,
    tokenExpiration: number,
    refreshExpiration: number
  ) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.tokenExpiration = tokenExpiration;
    this.refreshExpiration = refreshExpiration;
  }
  @Field({ description: "Access token" })
  token: string;

  @Field({ description: "Refresh access token" })
  refreshToken: string;

  @Field({ description: "Token expiration time" })
  tokenExpiration: number;

  @Field({ description: "Refresh token expiration time" })
  refreshExpiration: number;
}
