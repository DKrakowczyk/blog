import { AddCommentInput } from "./models/add-comments.input";
import { ArticleService } from "../articles/article.service";
import { Comment } from "./models/comment.schema";
import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { ReturnModelType } from "@typegoose/typegoose";
import { ObjectId } from "bson";
import { User } from "../../users/models/user.schema";
import { UserService } from "../../users/user.service";
@Injectable()
export class CommentService {
  //
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: ReturnModelType<typeof Comment>,
    @Inject(ArticleService)
    private readonly articleService: ArticleService,
    @Inject(UserService)
    private readonly userService: UserService
  ) {}

  async resolveAuthor(author: ObjectId): Promise<User> {
    return this.userService.findOne(author);
  }

  async create(
    currentUser: any,
    createCommentDto: AddCommentInput,
    articleId: ObjectIdScalar
  ): Promise<Comment> {
    const comment = {
      comment: createCommentDto.comment,
      authorName: currentUser.userName
    };
    const article = await this.articleService.addComment(
      articleId,
      new this.commentModel(comment)
    );
    return article.comments.pop();
  }

  async findAll(articleId: ObjectIdScalar): Promise<Comment[]> {
    return this.articleService.getComments(articleId);
  }

  async remove(
    articleId: ObjectIdScalar,
    commentId: ObjectIdScalar
  ): Promise<Comment> {
    return this.articleService.removeComment(articleId, commentId);
  }
}
