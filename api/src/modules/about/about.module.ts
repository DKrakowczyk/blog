import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AboutResolver } from "./about.resolver";
import { AboutService } from "./about.service";
import { About, AboutSchema } from "./models/about.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: About.name, schema: AboutSchema }])
  ],
  providers: [AboutResolver, AboutService],
  exports: [AboutService]
})
export class AboutModule {}
