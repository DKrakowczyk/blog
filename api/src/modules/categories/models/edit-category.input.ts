import { Field, ObjectType, InputType } from "type-graphql";
import { ObjectId } from "bson";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
@InputType()
export class EditCategoryInput {
  @Field({ description: "Category id" })
  _id: ObjectIdScalar;

  @Field({ description: "Category name", nullable: true })
  name?: string;

  @Field({ description: "Category description", nullable: true })
  description?: string;
}
