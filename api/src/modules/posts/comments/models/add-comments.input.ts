import { Field, InputType } from "type-graphql";

@InputType()
export class AddCommentInput {
  @Field({ description: "Comment body" })
  comment: string;
}
