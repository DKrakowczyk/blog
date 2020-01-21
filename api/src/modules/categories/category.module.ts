import { Category, CategorySchema } from "./models/category.schema";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";
import { Module, forwardRef } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleModule } from "../posts/articles/article.module";

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
