import { Article, ArticleSchema } from "./models/article.schema";
import { Module, forwardRef } from "@nestjs/common";

import { ArticleResolver } from "./article.resolver";
import { ArticleService } from "./article.service";
import { CategoryModule } from "src/modules/categories/category.module";
import { CommonModule } from "../../common/common.module";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "src/modules/users/user.module";

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
