import { Field, InputType, Int } from "type-graphql";
import { IsBoolean, IsNotEmpty, Length, MinLength } from "class-validator";
import { ObjectId } from "bson";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";

@InputType()
export class AddArticleInput {
  //
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

  @Field({ description: "Add is draft (true/false)" })
  @IsBoolean()
  isDraft: boolean;

  @Field(type => ObjectIdScalar, { description: "Add category" })
  categories?: ObjectId;
}
