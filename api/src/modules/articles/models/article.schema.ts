import { Field, ObjectType } from "type-graphql";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { ObjectId } from "bson";
import { Schema } from "mongoose";
import { buildSchema, prop as Property } from "@typegoose/typegoose";
import { Comment } from "src/modules/comments/models/comment.schema";
@ObjectType({ description: "Article model" })
export class Article {
  //
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ description: "Article title" })
  @Property()
  title: string;

  @Field({ description: "Article description", nullable: true })
  @Property({ required: false, maxlength: 200 })
  description: string;

  @Field({ description: "Article body" })
  @Property()
  body: string;

  @Field({ description: "Article body" })
  @Property()
  author: string;

  @Field({ description: "Is draft (true/false)" })
  @Property()
  isDraft: boolean;

  @Field(type => [Comment], {
    description: "Comments for current post",
    nullable: true
  })
  @Property({ required: false })
  comments: Comment[];

  @Field({ description: "Creation time" })
  @Property()
  created_at: Date;

  @Field({ description: "Date of publishing", nullable: true })
  @Property({ required: false })
  published_at: Date;
}
export const ArticleSchema: Schema<typeof Article> = buildSchema(Article);
