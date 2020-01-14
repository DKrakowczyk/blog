import { Field, ObjectType } from "type-graphql";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { ObjectId } from "bson";
import { Schema } from "mongoose";
import { buildSchema, prop as Property } from "@typegoose/typegoose";
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
  author: string;
}
export const CommentSchema: Schema<typeof Comment> = buildSchema(Comment);
