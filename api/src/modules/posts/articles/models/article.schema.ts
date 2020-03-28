import { buildSchema, prop as Property, Ref } from "@typegoose/typegoose";
import { Category } from "src/modules/categories/models/category.schema";
import { Comment } from "src/modules/posts/comments/models/comment.schema";
import { Field, ObjectType } from "type-graphql";
import { ObjectId } from "bson";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Schema } from "mongoose";
import { User } from "src/modules/users/models/user.schema";

@ObjectType({ description: "Article model" })
export class Article {
  //
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ description: "Article title" })
  @Property()
  title: string;

  @Field({ description: "Article description", nullable: true })
  @Property({ required: false })
  description: string;

  @Field({ description: "Article body" })
  @Property()
  body: string;

  @Field(type => User, { description: "Article author" })
  @Property({ ref: User, required: false })
  author: Ref<User>;

  @Field({ description: "Is draft (true/false)" })
  @Property()
  isDraft: boolean;

  @Field({ description: "Add article description", nullable: true })
  @Property()
  heroImg: string;

  @Field({ description: "Time to read" })
  @Property()
  timeToRead: number;

  @Field(type => Category, {
    description: "Categories for current post",
    nullable: true
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
