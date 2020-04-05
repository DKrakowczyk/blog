import { buildSchema, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "bson";
import { Schema } from "mongoose";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "About model" })
export class About {
  //
  @Field(() => ObjectIdScalar)
  readonly _id: ObjectId;

  @Field({ nullable: true, description: "About details" })
  @Property()
  about?: string;
  @Field({ nullable: true, description: "About facebook url" })
  @Property()
  facebook?: string;
  @Field({ nullable: true, description: "About instagram url" })
  @Property()
  instagram?: string;
  @Field({ nullable: true, description: "About twitter url" })
  @Property()
  twitter?: string;
  @Field({ nullable: true, description: "About linkedIn url" })
  @Property()
  linkedIn?: string;
}
export const AboutSchema: Schema<typeof About> = buildSchema(About);
