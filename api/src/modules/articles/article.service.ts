import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { AddArticleInput } from "./models/article.input";
import { Article } from "./models/article.schema";
import { ObjectIdScalar } from "src/modules/common/scalars/object-id.scalar";
import { Comment } from "../comments/models/comment.schema";
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private readonly articleModel: ReturnModelType<typeof Article>
  ) {}

  async create(createArticleDto: AddArticleInput): Promise<Article> {
    const article = new this.articleModel({
      ...createArticleDto,
      created_at: new Date().toISOString()
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
