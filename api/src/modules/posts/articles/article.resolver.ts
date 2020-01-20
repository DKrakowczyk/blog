import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
  Context
} from "@nestjs/graphql";
import { ArticleService } from "./article.service";
import { AddArticleInput } from "./models/article.input";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { Article } from "./models/article.schema";
import { Inject, UseGuards } from "@nestjs/common";
import { User } from "src/modules/users/models/user.schema";
import { RoleGuard } from "../../auth/guards/roles.guard";
import { Roles } from "../../auth/decorators/roles.decorator";
import { Role } from "../../users/models/role.enum";
import { AuthGuard } from "../../auth/guards/auth.guard";

@Resolver(() => Article)
@UseGuards(AuthGuard, RoleGuard)
export class ArticleResolver {
  constructor(
    @Inject(ArticleService) private readonly articleService: ArticleService
  ) {}

  @ResolveProperty(type => User)
  async author(@Parent() article: Article): Promise<User> {
    return this.articleService.userService.findOne(article.author);
  }
  @Roles(Role.Maintainer)
  @Query(() => [Article])
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Query(() => Article)
  async getSingleArticle(@Args("_id") _id: ObjectIdScalar): Promise<Article> {
    return this.articleService.findOne(_id);
  }

  @Mutation(() => Article)
  async createArticle(
    @Args("input") input: AddArticleInput,
    @Context("user") currentUser
  ): Promise<Article> {
    return this.articleService.create(input, currentUser);
  }

  @Mutation(() => Article)
  async publishArticle(@Args("_id") _id: ObjectIdScalar): Promise<Article> {
    return this.articleService.publish(_id);
  }

  @Mutation(() => Article)
  async deleteArticle(@Args("_id") _id: ObjectIdScalar): Promise<Article> {
    return this.articleService.delete(_id);
  }
}
