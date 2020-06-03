import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoryModule } from "src/modules/categories/category.module";
import { UserModule } from "src/modules/users/user.module";
import { ArticleResolver } from "./article.resolver";
import { ArticleService } from "./article.service";
import { Article, ArticleSchema } from "./models/article.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    UserModule,
    forwardRef(() => CategoryModule)
  ],
  providers: [ArticleResolver, ArticleService],
  exports: [ArticleService]
})
export class ArticleModule {}
