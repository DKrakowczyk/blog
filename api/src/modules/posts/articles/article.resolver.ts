import { Inject, UseGuards } from "@nestjs/common";
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver
} from "@nestjs/graphql";
import { User } from "src/modules/users/models/user.schema";
import { AuthGuard } from "../../auth/guards/auth.guard";
import { Category } from "../../categories/models/category.schema";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { ArticleService } from "./article.service";
import { AddArticleInput } from "./models/add-article.input";
import { Article } from "./models/article.schema";
import { EditArticleInput } from "./models/edit-article.input";
import { Statistics } from "./models/statistics.schema";

@Resolver(() => Article)
@UseGuards(AuthGuard)
export class ArticleResolver {
  //
  constructor(
    @Inject(ArticleService) private readonly articleService: ArticleService
  ) {}

  @ResolveProperty(type => User)
  async author(@Parent() article: Article): Promise<User> {
    return this.articleService.resolveAuthor(article.author);
  }

  @ResolveProperty(type => User)
  async categories(@Parent() article: Article): Promise<Category> {
    return this.articleService.resolveCategory(article.categories);
  }

  @Query(() => [Article])
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Query(() => [Article])
  async searchAllArticles(@Args("title") title?: string): Promise<Article[]> {
    return this.articleService.search(title);
  }

  @Query(() => [Article])
  async getFromCategory(
    @Args("categoryId") categoryId: ObjectIdScalar
  ): Promise<Article[]> {
    return await this.articleService.getFromCategory(categoryId);
  }

  @Query(() => [Article])
  async getArticlesExcept(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Article[]> {
    return this.articleService.findAllExcept(articleId);
  }

  @Query(() => Article)
  async getSingleArticle(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Article> {
    return await this.articleService.findOne(articleId);
  }

  @Mutation(() => Article)
  async createArticle(
    @Args("addArticle") addArticle: AddArticleInput,
    @Context("user") currentUser
  ): Promise<Article> {
    return this.articleService.create(addArticle, currentUser);
  }
  @Mutation(() => Article)
  async editArticle(
    @Args("editArticle") editArticle: EditArticleInput
  ): Promise<Article> {
    return this.articleService.edit(editArticle);
  }

  @Mutation(() => Article)
  async publishArticle(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Article> {
    return this.articleService.publish(articleId, false);
  }

  @Mutation(() => Article)
  async unpublishArticle(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Article> {
    return this.articleService.publish(articleId, true);
  }

  @Mutation(() => Article)
  async deleteArticle(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Article> {
    return this.articleService.delete(articleId);
  }

  @Query(() => Statistics)
  async getStatistics(): Promise<Statistics> {
    return this.articleService.getStatistics();
  }
}
