import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: "Statistics model" })
export class Statistics {
  //
  @Field({ description: "Articles count" })
  articlesCount: number;
  @Field({ description: "Published articles count" })
  publishedCount: number;
  @Field({ description: "Draft's count" })
  draftsCount: number;
  @Field({ description: "Comments count" })
  commentsCount: number;
}
