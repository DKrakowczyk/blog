import { AddCommentInput } from "./models/add-comments.input";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Comment } from "./models/comment.schema";
import { CommentService } from "./comment.service";
import { Inject } from "@nestjs/common";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";

@Resolver(() => Comment)
export class CommentResolver {
  //
  constructor(
    @Inject(CommentService) private readonly commentService: CommentService
  ) {}

  @Query(() => [Comment])
  async getAllComments(
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Comment[]> {
    return this.commentService.findAll(articleId);
  }

  @Mutation(() => Comment)
  async addComment(
    @Args("addComment") addComment: AddCommentInput,
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Comment> {
    return this.commentService.create(addComment, articleId);
  }

  @Mutation(() => Comment)
  async removeComment(
    @Args("articleId") articleId: ObjectIdScalar,
    @Args("commentId") commentId: ObjectIdScalar
  ): Promise<Comment> {
    return this.commentService.remove(articleId, commentId);
  }
}
