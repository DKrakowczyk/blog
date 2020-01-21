import { buildSchema, prop as Property } from "@typegoose/typegoose";
import { Field, ObjectType } from "type-graphql";
import { ObjectId } from "bson";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Schema } from "mongoose";

@ObjectType({ description: "Category model" })
export class Category {
  //
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ description: "Category name" })
  @Property({ minlength: 0, maxlength: 100 })
  name: string;

  @Field({ nullable: true, description: "Category description" })
  @Property({ required: false })
  description?: string;
}
export const CategorySchema: Schema<typeof Category> = buildSchema(Category);
