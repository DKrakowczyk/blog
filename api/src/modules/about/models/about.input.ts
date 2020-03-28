import { Field, ObjectType, InputType } from "type-graphql";

@InputType()
export class AboutInput {
  @Field({ nullable: true, description: "About description" })
  about?: string;
  @Field({ nullable: true, description: "About facebook url" })
  facebook?: string;
  @Field({ nullable: true, description: "About instagram url" })
  instagram?: string;
  @Field({ nullable: true, description: "About twitter url" })
  twitter?: string;
  @Field({ nullable: true, description: "About linkedIn url" })
  linkedIn?: string;
}
