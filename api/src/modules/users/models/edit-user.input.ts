import { Field, InputType } from "type-graphql";
import { ObjectId } from "bson";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { Role } from "./role.enum";

@InputType()
export class EditUserInput {
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ nullable: true })
  userName?: string;

  @Field(type => Role)
  role: Role;
}
