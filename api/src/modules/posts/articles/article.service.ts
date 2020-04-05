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
import { EditArticleInput } from "./models/edit-article.input";
import { Statistics } from "./models/statistics.schema";
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
    currentUser: any
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

  async edit(editArticleDto: EditArticleInput): Promise<Article> {
    const article = await this.articleModel.findOne(editArticleDto._id);
    article.title =
      editArticleDto.title && editArticleDto.title
        ? editArticleDto.title
        : article.title;
    article.description =
      editArticleDto.description && editArticleDto.description
        ? editArticleDto.description
        : article.description;
    article.body =
      editArticleDto.body && editArticleDto.body
        ? editArticleDto.body
        : article.body;
    article.isDraft =
      editArticleDto.isDraft && editArticleDto.isDraft
        ? editArticleDto.isDraft
        : article.isDraft;
    article.categories =
      editArticleDto.categories && editArticleDto.categories
        ? editArticleDto.categories
        : article.categories;
    return article.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async search(title?: string): Promise<Article[]> {
    let query: any = {};
    if (title) {
      query.title = { $regex: new RegExp(title, "i") };
    }

    return this.articleModel.find(query).exec();
  }

  async getFromCategory(categoryId: ObjectIdScalar): Promise<Article[]> {
    return this.articleModel.find({ categories: categoryId }).exec();
  }

  async findAllExcept(articleId: ObjectIdScalar): Promise<Article[]> {
    const articles = await this.articleModel
      .find({ _id: { $ne: articleId } })
      .exec();
    const shuffled = articles.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 4);
  }

  async findOne(articleId: ObjectIdScalar): Promise<Article> {
    const article = await this.articleModel.findById(articleId).exec();
    article.comments = article.comments.reverse();
    return article;
  }

  async publish(articleId: ObjectIdScalar, isDraft: boolean): Promise<Article> {
    const article = await this.articleModel.findById(articleId).exec();
    article.isDraft = isDraft;
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

  async getStatistics(): Promise<Statistics> {
    let publishedCount = 0,
      draftCount = 0,
      commentCount = 0;
    const articles = await this.findAll();
    const drafts = articles.filter(article => {
      return article.isDraft;
    });
    articles.map(article => (commentCount += article.comments.length));
    return {
      articlesCount: articles.length,
      publishedCount: articles.length - drafts.length,
      draftsCount: drafts.length,
      commentsCount: commentCount
    };
  }
}
