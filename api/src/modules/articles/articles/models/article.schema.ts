import { Field, ObjectType } from "type-graphql";
import { prop as Property, Ref, buildSchema } from "@typegoose/typegoose";
import { User, UserSchema } from "src/modules/users/models/user.schema";

import { Category } from "src/modules/categories/models/category.schema";
import { Comment } from "src/modules/articles/comments/models/comment.schema";
import { ObjectId } from "bson";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Schema } from "mongoose";

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

  @Field(type => User, { description: "Article author" })
  @Property({ ref: User, required: true })
  author: Ref<User | ObjectIdScalar>;

  @Field({ description: "Is draft (true/false)" })
  @Property()
  isDraft: boolean;

  @Field({ description: "Time to read" })
  @Property()
  timeToRead: number;

  @Field(type => Category, {
    description: "Categories for current post"
  })
  @Property({ ref: Category, required: false })
  categories: Category;

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
