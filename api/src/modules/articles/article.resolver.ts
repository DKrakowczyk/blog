import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ArticleService } from "./article.service";
import { AddArticleInput } from "./models/article.input";
import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
import { Article } from "./models/article.schema";
import { Inject } from "@nestjs/common";

@Resolver(() => Article)
export class ArticleResolver {
  constructor(
    @Inject(ArticleService) private readonly articleService: ArticleService
  ) {}

  @Query(() => [Article])
  async getAllArticles(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Query(() => Article)
  async getSingleArticle(@Args("_id") _id: ObjectIdScalar): Promise<Article> {
    return this.articleService.findOne(_id);
  }

  @Mutation(() => Article)
  async createArticle(@Args("input") input: AddArticleInput): Promise<Article> {
    return this.articleService.create(input);
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
