import { Field, InputType } from "type-graphql";

@InputType()
export class SignInUserInput {
  @Field()
  email: string;
  @Field()
  password: string;
}
