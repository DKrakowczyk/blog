import { Category, CategorySchema } from "./models/category.schema";

import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";
import { CommonModule } from "../common/common.module";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema }
    ]),
    CommonModule
  ],
  providers: [CategoryResolver, CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
