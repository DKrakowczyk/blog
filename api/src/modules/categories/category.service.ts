import { Injectable, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";

import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
import { ArticleService } from "../articles/articles/article.service";
import { Category } from "./models/category.schema";
import { AddCategoryInput } from "./models/add-category.input";
@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: ReturnModelType<typeof Category>
  ) {}

  async create(createCategoryDto: AddCategoryInput): Promise<Category> {
    return new this.categoryModel(createCategoryDto).save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.findAll().exec();
  }

  async findOne(categoryId: ObjectIdScalar): Promise<Category> {
    return this.categoryModel.findById(categoryId).exec();
  }

  async remove(categoryId: ObjectIdScalar): Promise<Category> {
    const category = await this.categoryModel.findById(categoryId).exec();
    return category.remove();
  }
}
