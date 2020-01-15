import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommonModule } from "../common/common.module";
import { Comment, CommentSchema } from "./models/comment.schema";
import { CommentResolver } from "./comment.resolver";
import { CommentService } from "./comment.service";
import { ArticleService } from "../articles/article.service";
import { ArticleModule } from "../articles/article.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    CommonModule,
    ArticleModule
  ],
  providers: [CommentResolver, CommentService]
})
export class CommentModule {}
