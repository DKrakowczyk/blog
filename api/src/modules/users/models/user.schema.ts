import { buildSchema, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "bson";
import { Schema } from "mongoose";
import { Field, ObjectType } from "type-graphql";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { Role } from "./role.enum";

@ObjectType()
export class User {
  @Field(type => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field()
  @Property({ description: "User name" })
  userName: string;

  @Field({ description: "User email" })
  @Property()
  email: string;

  @Field({ description: "User password", nullable: true })
  @Property()
  password: string;

  @Field(type => Role, { description: "User role" })
  @Property({ enum: Role })
  role: Role;
}

export const UserSchema: Schema<typeof User> = buildSchema(User);
