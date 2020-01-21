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

@Resolver(() => Article)
@UseGuards(AuthGuard, RoleGuard)
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

  @Roles(Role.Maintainer)
  @Query(() => [Article])
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Query(() => Article)
  async getSingleArticle(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Article> {
    return this.articleService.findOne(articleId);
  }
  @Mutation(() => Article)
  async createArticle(
    @Args("addArticle") addArticle: AddArticleInput,
    @Context("user") currentUser
  ): Promise<Article> {
    return this.articleService.create(addArticle, currentUser);
  }

  @Mutation(() => Article)
  async publishArticle(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Article> {
    return this.articleService.publish(articleId);
  }

  @Mutation(() => Article)
  async deleteArticle(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Article> {
    return this.articleService.delete(articleId);
  }
}
