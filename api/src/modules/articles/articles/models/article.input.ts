import { Field, InputType, Int } from "type-graphql";
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  Length,
  MinLength
} from "class-validator";

import { ObjectId } from "bson";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { User } from "src/modules/users/models/user.schema";

@InputType()
export class AddArticleInput {
  @Field({ description: "Add article title" })
  @IsNotEmpty()
  @Length(0, 200)
  title: string;

  @Field({ description: "Add article description", nullable: true })
  description: string;

  @Field({ description: "Add article body" })
  @IsNotEmpty()
  @MinLength(0)
  body: string;

  @Field(type => ObjectIdScalar, { description: "Add article body" })
  author: ObjectId;

  @Field({ description: "Add is draft (true/false)" })
  @IsBoolean()
  isDraft: boolean;

  @Field(type => ObjectIdScalar, { description: "Add category" })
  categories?: ObjectId;
}
