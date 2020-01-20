import { Injectable, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { AddArticleInput } from "./models/article.input";
import { Article } from "./models/article.schema";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Comment } from "../comments/models/comment.schema";
import { UserService } from "src/modules/users/user.service";
import { CategoryService } from "src/modules/categories/category.service";
import { ObjectId } from "bson";
// To calculate time to read variable
const WORDS_PER_MINUTE = 200;
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private readonly articleModel: ReturnModelType<typeof Article>,
    @Inject(UserService)
    public readonly userService: UserService,
    @Inject(CategoryService)
    private readonly categoryService: CategoryService
  ) {}

  async create(
    createArticleDto: AddArticleInput,
    currentUser
  ): Promise<Article> {
    console.log(createArticleDto);
    const article = new this.articleModel({
      ...createArticleDto,
      created_at: new Date().toISOString(),
      // author: createArticleDto.authorId,
      // category: await this.categoryService.findOne(createArticleDto.categoryId),
      timeToRead: Math.ceil(
        createArticleDto.body.split(" ").length / WORDS_PER_MINUTE
      )
    });
    return article.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: ObjectIdScalar): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }

  async publish(id: ObjectIdScalar): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();
    article.isDraft = false;
    article.published_at = new Date().toISOString();
    return article.save();
  }

  async delete(id: ObjectIdScalar): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();
    return article.remove();
  }

  async addComment(id: ObjectIdScalar, comment: Comment): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();
    article.comments.push(comment);
    return article.save();
  }

  async getComments(id: ObjectIdScalar): Promise<Comment[]> {
    const article = await this.articleModel.findById(id).exec();
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
