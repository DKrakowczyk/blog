import { Inject, UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthGuard } from "../../auth/guards/auth.guard";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { CommentService } from "./comment.service";
import { AddCommentInput } from "./models/add-comments.input";
import { Comment } from "./models/comment.schema";

@UseGuards(AuthGuard)
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
    @Context("user") currentUser,
    @Args("addComment") addComment: AddCommentInput,
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Comment> {
    return this.commentService.create(currentUser, addComment, articleId);
  }

  @Mutation(() => Comment)
  async removeComment(
    @Args("articleId") articleId: ObjectIdScalar,
    @Args("commentId") commentId: ObjectIdScalar
  ): Promise<Comment> {
    return this.commentService.remove(articleId, commentId);
  }
}
