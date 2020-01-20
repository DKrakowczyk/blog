import { Field, ObjectType } from "type-graphql";
import { prop as Property, buildSchema } from "@typegoose/typegoose";

import { ObjectId } from "bson";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Schema } from "mongoose";
import { User } from "src/modules/users/models/user.schema";

@ObjectType({ description: "Comment model" })
export class Comment {
  //
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ description: "Comment body" })
  @Property({ minlength: 0, maxlength: 1000 })
  comment: string;

  @Field({ description: "Comment author" })
  @Property()
  author: User;
}
export const CommentSchema: Schema<typeof Comment> = buildSchema(Comment);
