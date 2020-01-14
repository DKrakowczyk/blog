import { InputType, Field, Int } from "type-graphql";
import {
  IsNotEmpty,
  Length,
  IsDate,
  IsBoolean,
  MinLength
} from "class-validator";

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

  @Field({ description: "Add article body" })
  author: string;

  @Field({ description: "Add is draft (true/false)" })
  @IsBoolean()
  isDraft: boolean;
}
