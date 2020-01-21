import { AddCategoryInput } from "./models/add-category.input";
import { Category } from "./models/category.schema";
import { Injectable, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
import { ReturnModelType } from "@typegoose/typegoose";
import { Article } from "../posts/articles/models/article.schema";
import { ArticleService } from "../posts/articles/article.service";

@Injectable()
export class CategoryService {
  //
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: ReturnModelType<typeof Category>,
    @Inject(ArticleService)
    private readonly articleService: ArticleService
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

  async getFromCategory(categoryId: ObjectIdScalar): Promise<Article[]> {
    const articles = await this.articleService.findAll();
    return articles.filter(article => article.categories._id === categoryId);
  }
}
