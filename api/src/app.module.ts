import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { AboutModule } from "./modules/about/about.module";
import { AuthModule } from "./modules/auth/auth.module";
import { CategoryModule } from "./modules/categories/category.module";
import { CommonModule } from "./modules/common/common.module";
import { ArticleModule } from "./modules/posts/articles/article.module";
import { CommentModule } from "./modules/posts/comments/comment.module";
import { IdeasModule } from "./modules/rest-ideas/ideas.module";
import { UserModule } from "./modules/users/user.module";

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
        MongooseModule.forRoot("mongodb://mongo/blog")
    ]
})
export class AppModule {}
