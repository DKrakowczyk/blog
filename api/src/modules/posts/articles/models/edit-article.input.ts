import { Field, InputType, Int } from "type-graphql";
import { IsBoolean, IsNotEmpty, Length, MinLength } from "class-validator";
import { ObjectId } from "bson";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";

@InputType()
export class EditArticleInput {
  //
  @Field({ description: "Article id" })
  _id: ObjectIdScalar;

  @Field({ description: "Add article title", nullable: true })
  @IsNotEmpty()
  @Length(0, 200)
  title: string;

  @Field({ description: "Add article description", nullable: true })
  description: string;

  @Field({ description: "Add article body", nullable: true })
  @IsNotEmpty()
  @MinLength(0)
  body: string;

  @Field({ description: "Add is draft (true/false)", nullable: true })
  @IsBoolean()
  isDraft: boolean;

  @Field({ description: "Add article description", nullable: true })
  heroImg: string;

  @Field(type => ObjectIdScalar, {
    description: "Add category",
    nullable: true
  })
  categories?: ObjectId;
}
