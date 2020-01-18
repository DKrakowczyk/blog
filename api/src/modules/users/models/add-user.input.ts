import { Field, InputType } from "type-graphql";
import { Role } from "./role.enum";

@InputType()
export class AddUserInput {
  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(type => Role)
  role: Role;
}
