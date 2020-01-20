import { Field, ObjectType, InputType } from "type-graphql";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { ObjectId } from "bson";

@InputType()
export class AddCommentInput {
  @Field({ description: "Comment body" })
  comment: string;

  @Field({ description: "Comment author" })
  author: string;
}
