import { Injectable, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { AddArticleInput } from "./models/add-article.input";
import { Article } from "./models/article.schema";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Comment } from "../comments/models/comment.schema";
import { UserService } from "src/modules/users/user.service";
import { CategoryService } from "src/modules/categories/category.service";
import { User } from "../../users/models/user.schema";
import { ObjectId } from "bson";
import { Category } from "../../categories/models/category.schema";
// To calculate time to read variable
const WORDS_PER_MINUTE = 200;

@Injectable()
export class ArticleService {
  //
  constructor(
    @InjectModel(Article.name)
    private readonly articleModel: ReturnModelType<typeof Article>,
    @Inject(UserService)
    private readonly userService: UserService,
    @Inject(CategoryService)
    private readonly categoryService: CategoryService
  ) {}

  async resolveAuthor(author: ObjectId): Promise<User> {
    return this.userService.findOne(author);
  }

  async resolveCategory(category: ObjectId): Promise<Category> {
    return this.categoryService.findOne(category);
  }

  async create(
    createArticleDto: AddArticleInput,
    currentUser
  ): Promise<Article> {
    const article = new this.articleModel({
      ...createArticleDto,
      created_at: new Date().toISOString(),
      author: currentUser.id,
      timeToRead: Math.ceil(
        createArticleDto.body.split(" ").length / WORDS_PER_MINUTE
      )
    });
    return article.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(articleId: ObjectIdScalar): Promise<Article> {
    return this.articleModel.findById(articleId).exec();
  }

  async publish(articleId: ObjectIdScalar): Promise<Article> {
    const article = await this.articleModel.findById(articleId).exec();
    article.isDraft = false;
    article.published_at = new Date().toISOString();
    return article.save();
  }

  async delete(articleId: ObjectIdScalar): Promise<Article> {
    const article = await this.articleModel.findById(articleId).exec();
    return article.remove();
  }

  async addComment(
    articleId: ObjectIdScalar,
    comment: Comment
  ): Promise<Article> {
    const article = await this.articleModel.findById(articleId).exec();
    article.comments.push(comment);
    return article.save();
  }

  async getComments(articleId: ObjectIdScalar): Promise<Comment[]> {
    const article = await this.articleModel.findById(articleId).exec();
    return article.comments;
  }

  async removeComment(
    articleId: ObjectIdScalar,
    commentId: ObjectIdScalar
  ): Promise<Comment> {
    const article = await this.articleModel.findById(articleId).exec();
    const removeAt = article.comments
      .map(item => {
        return item._id;
      })
      .indexOf(commentId);
    const comment = article.comments[removeAt];
    article.comments.splice(removeAt, 1);
    article.save();
    return comment;
  }
}
