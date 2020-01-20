import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ObjectIdScalar } from "../../common/scalars/object-id.scalar";
import { Inject } from "@nestjs/common";
import { Comment } from "./models/comment.schema";
import { AddCommentInput } from "./models/addComments.input";
import { CommentService } from "./comment.service";

@Resolver(() => Comment)
export class CommentResolver {
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
    @Args("input") input: AddCommentInput,
    @Args("articleId") articleId: ObjectIdScalar
  ): Promise<Comment> {
    return this.commentService.create(input, articleId);
  }

  @Mutation(() => Comment)
  async removeComment(
    @Args("articleId") articleId: ObjectIdScalar,
    @Args("commentId") commentId: ObjectIdScalar
  ): Promise<Comment> {
    return this.commentService.remove(articleId, commentId);
  }
}
