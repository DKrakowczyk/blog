import { Field, ObjectType } from "type-graphql";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { ObjectId } from "bson";

@ObjectType({ description: "Comment model" })
export class AddCommentInput {
  //
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ description: "Comment body" })
  comment: string;

  @Field({ description: "Comment author" })
  author: string;
}
