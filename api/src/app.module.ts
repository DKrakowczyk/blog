import { ArticleModule } from "./modules/posts/articles/article.module";
import { AuthModule } from "./modules/auth/auth.module";
import { CategoryModule } from "./modules/categories/category.module";
import { CommentModule } from "./modules/posts/comments/comment.module";
import { CommonModule } from "./modules/common/common.module";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./modules/users/user.module";
import { AboutModule } from "./modules/about/about.module";
import { IdeasController } from "./modules/rest-ideas/ideas.controller";
import { IdeasModule } from "./modules/rest-ideas/ideas.module";

@Module({
  imports: [
    IdeasModule,
    ArticleModule,
    CommentModule,
    CommonModule,
    UserModule,
    CategoryModule,
    AboutModule,
    AuthModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      context: ({ req }) => ({ headers: req.headers })
    }),
    MongooseModule.forRoot("mongodb://localhost/blog-system")
  ]
})
export class AppModule {}
