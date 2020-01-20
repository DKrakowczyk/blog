import { Field, ObjectType } from "type-graphql";
import { prop as Property, buildSchema } from "@typegoose/typegoose";

import { ObjectId } from "bson";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { Role } from "./role.enum";
import { Schema } from "mongoose";

@ObjectType()
export class User {
  @Field(type => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field()
  @Property()
  userName: string;

  @Field()
  @Property()
  email: string;

  @Field({ nullable: true })
  @Property()
  password: string;

  @Field(type => Role, { description: "User role" })
  @Property({ enum: Role })
  role: Role;
}

export const UserSchema: Schema<typeof User> = buildSchema(User);
