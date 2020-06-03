import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
import { CategoryService } from "./category.service";
import { AddCategoryInput } from "./models/add-category.input";
import { Category } from "./models/category.schema";
import { EditCategoryInput } from "./models/edit-category.input";

@Resolver(() => Category)
export class CategoryResolver {
  //
  constructor(
    @Inject(CategoryService) private readonly categoryService: CategoryService
  ) {}

  @Query(() => [Category])
  async getAllCategories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Query(() => Category)
  async getCategory(
    @Args("categoryId") categoryId: ObjectIdScalar
  ): Promise<Category> {
    return this.categoryService.findOne(categoryId);
  }

  @Mutation(() => Category)
  async addCategory(@Args("input") input: AddCategoryInput): Promise<Category> {
    return this.categoryService.create(input);
  }
  @Mutation(() => Category)
  async editCategory(
    @Args("input") input: EditCategoryInput
  ): Promise<Category> {
    return this.categoryService.edit(input);
  }

  @Mutation(() => Category)
  async removeCategory(
    @Args("categoryId") categoryId: ObjectIdScalar
  ): Promise<Category> {
    return this.categoryService.remove(categoryId);
  }
}
