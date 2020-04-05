import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleModule } from "../posts/articles/article.module";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";
import { Category, CategorySchema } from "./models/category.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema }
    ]),
    forwardRef(() => ArticleModule)
  ],
  providers: [CategoryResolver, CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
