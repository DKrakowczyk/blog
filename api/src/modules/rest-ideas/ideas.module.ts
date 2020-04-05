import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IdeasSchema } from "./ideas.schema";
import { IdeasController } from "./ideas.controller";
import { IdeasService } from "./ideas.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Ideas", schema: IdeasSchema }])
  ],
  controllers: [IdeasController],
  providers: [IdeasService]
})
export class IdeasModule {}
