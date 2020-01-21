import { AddCategoryInput } from "./models/add-category.input";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Category } from "./models/category.schema";
import { CategoryService } from "./category.service";
import { Inject } from "@nestjs/common";
import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
import { Article } from "../posts/articles/models/article.schema";

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
  async removeComment(
    @Args("categoryId") categoryId: ObjectIdScalar
  ): Promise<Category> {
    return this.categoryService.remove(categoryId);
  }

  @Query(() => [Article])
  async getFromCategory(
    @Args("categoryId") categoryId: ObjectIdScalar
  ): Promise<Article[]> {
    return this.categoryService.getFromCategory(categoryId);
  }
}
