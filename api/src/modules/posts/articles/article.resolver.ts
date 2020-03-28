import { AddArticleInput } from "./models/add-article.input";
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver
} from "@nestjs/graphql";
import { Article } from "./models/article.schema";
import { ArticleService } from "./article.service";
import { AuthGuard } from "../../auth/guards/auth.guard";
import { Inject, UseGuards } from "@nestjs/common";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { Role } from "../../users/models/role.enum";
import { RoleGuard } from "../../auth/guards/roles.guard";
import { Roles } from "../../auth/decorators/roles.decorator";
import { User } from "src/modules/users/models/user.schema";
import { Category } from "../../categories/models/category.schema";
import { EditArticleInput } from "./models/edit-article.input";

@Resolver(() => Article)
// @UseGuards(AuthGuard, RoleGuard)
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

  //@Roles(Role.Maintainer)
  @Query(() => [Article])
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.findAll();
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
    @Args("addArticle") addArticle: AddArticleInput
    // @Context("user") currentUser
  ): Promise<Article> {
    return this.articleService.create(addArticle);
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
}
