import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
import { AddCategoryInput } from "./models/add-category.input";
import { Category } from "./models/category.schema";
import { EditCategoryInput } from "./models/edit-category.input";

@Injectable()
export class CategoryService {
  //
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: ReturnModelType<typeof Category>
  ) {}

  async create(createCategoryDto: AddCategoryInput): Promise<Category> {
    return new this.categoryModel(createCategoryDto).save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(categoryId: ObjectIdScalar): Promise<Category> {
    return this.categoryModel.findById(categoryId).exec();
  }

  async edit(editCategoryDto: EditCategoryInput): Promise<Category> {
    const category = await this.categoryModel.findOne(editCategoryDto._id);
    category.name =
      editCategoryDto.name && editCategoryDto.name.length
        ? editCategoryDto.name
        : category.name;
    category.description =
      editCategoryDto.description && editCategoryDto.description.length
        ? editCategoryDto.description
        : category.description;
    return category.save();
  }

  async remove(categoryId: ObjectIdScalar): Promise<Category> {
    const category = await this.categoryModel.findById(categoryId).exec();
    return category.remove();
  }
}
