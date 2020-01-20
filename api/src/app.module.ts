import { APP_GUARD } from "@nestjs/core";
import { ArticleModule } from "./modules/articles/articles/article.module";
import { CategoryModule } from "./modules/categories/category.module";
import { CommentModule } from "./modules/articles/comments/comment.module";
import { GraphQLModule } from "@nestjs/graphql";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RolesGuard } from "./modules/auth/guards/auth.guard";
import { UserModule } from "./modules/users/user.module";
@Module({
  imports: [
    ArticleModule,
    CommentModule,
    UserModule,
    CategoryModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    MongooseModule.forRoot("mongodb://localhost/blog-system")
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule {}
