import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ArticleModule } from "./modules/articles/article.module";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentModule } from "./modules/comments/comment.module";
import { UserModule } from "./modules/users/user.module";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./modules/auth/guards/auth.guard";
@Module({
  imports: [
    ArticleModule,
    CommentModule,
    UserModule,
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
