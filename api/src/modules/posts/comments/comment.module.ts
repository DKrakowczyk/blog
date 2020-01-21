import { ArticleModule } from "../articles/article.module";
import { Comment, CommentSchema } from "./models/comment.schema";
import { CommentResolver } from "./comment.resolver";
import { CommentService } from "./comment.service";
import { CommonModule } from "../../common/common.module";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    ArticleModule
  ],
  providers: [CommentResolver, CommentService]
})
export class CommentModule {}
