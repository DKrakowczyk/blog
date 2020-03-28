import { Module, forwardRef } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleModule } from "../posts/articles/article.module";
import { About, AboutSchema } from "./models/about.schema";
import { AboutResolver } from "./about.resolver";
import { AboutService } from "./about.service";
@Module({
  imports: [
    MongooseModule.forFeature([{ name: About.name, schema: AboutSchema }])
  ],
  providers: [AboutResolver, AboutService],
  exports: [AboutService]
})
export class AboutModule {}
