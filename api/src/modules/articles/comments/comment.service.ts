import { Injectable, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { Comment } from "./models/comment.schema";
import { AddCommentInput } from "./models/addComments.input";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { ArticleService } from "../articles/article.service";
@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: ReturnModelType<typeof Comment>,
    @Inject(ArticleService)
    private readonly articleService: ArticleService
  ) {}

  async create(
    createComment: AddCommentInput,
    articleId: ObjectIdScalar
  ): Promise<Comment> {
    const article = await this.articleService.addComment(
      articleId,
      new this.commentModel(createComment)
    );
    const comment = article.comments.pop();
    return comment;
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
