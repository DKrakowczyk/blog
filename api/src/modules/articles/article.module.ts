import { Module } from "@nestjs/common";
import { ArticleResolver } from "./article.resolver";
import { Article, ArticleSchema } from "./models/article.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleService } from "./article.service";
import { CommonModule } from "../common/common.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    CommonModule
  ],
  providers: [ArticleResolver, ArticleService]
})
export class ArticleModule {}
