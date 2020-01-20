import { Field, ObjectType, InputType } from "type-graphql";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { ObjectId } from "bson";

@InputType()
export class AddCategoryInput {
  @Field({ description: "Category name" })
  name: string;

  @Field({ description: "Category description" })
  description?: string;
}
