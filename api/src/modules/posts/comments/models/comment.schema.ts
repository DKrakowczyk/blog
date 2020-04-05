import { buildSchema, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "bson";
import { Schema } from "mongoose";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Comment model" })
export class Comment {
  //
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ description: "Comment body" })
  @Property({ minlength: 0, maxlength: 1000 })
  comment: string;

  @Field({ description: "Comment author", nullable: true })
  @Property({ required: false })
  authorName: string;
}
export const CommentSchema: Schema<typeof Comment> = buildSchema(Comment);
