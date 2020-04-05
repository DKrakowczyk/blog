import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "../../users/user.module";
import { ArticleModule } from "../articles/article.module";
import { CommentResolver } from "./comment.resolver";
import { CommentService } from "./comment.service";
import { Comment, CommentSchema } from "./models/comment.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    ArticleModule,
    UserModule
  ],
  providers: [CommentResolver, CommentService]
})
export class CommentModule {}
