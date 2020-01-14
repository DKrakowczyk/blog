import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ArticleModule } from "./modules/articles/article.module";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentModule } from "./modules/comments/comment.module";
@Module({
  imports: [
    ArticleModule,
    CommentModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    MongooseModule.forRoot("mongodb://localhost/blog-system")
  ]
})
export class AppModule {}
