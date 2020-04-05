import { ObjectId } from "bson";
import { IsBoolean, IsNotEmpty, Length, MinLength } from "class-validator";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Field, InputType } from "type-graphql";

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

  @Field({ description: "Add article description", nullable: true })
  heroImg: string;

  @Field(type => ObjectIdScalar, { description: "Add category" })
  categories?: ObjectId;
}
