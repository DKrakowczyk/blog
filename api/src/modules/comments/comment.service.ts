import { Injectable, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { Comment } from "./models/comment.schema";
import { AddCommentInput } from "./models/addComments.input";
import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: ReturnModelType<typeof Comment> // @Inject(typeof ArticleService)
  ) // private readonly articleService: ArticleService
  {}

  async create(
    createComment: AddCommentInput,
    id: ObjectIdScalar
  ): Promise<Comment> {
    // const article = await this.articleService.findOne(id);
    const comment = new this.commentModel(createComment);

    return comment;
  }

  async findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }
}
