import { Field, ObjectType, InputType } from "type-graphql";

@InputType()
export class AddCategoryInput {
  @Field({ description: "Category name" })
  name: string;

  @Field({ description: "Category description" })
  description?: string;
}
