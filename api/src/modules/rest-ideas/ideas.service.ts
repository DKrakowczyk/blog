import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateIdeaDto } from "./dto/create-idea.dto";
import { Ideas } from "./ideas.interface";

@Injectable()
export class IdeasService {
  constructor(@InjectModel("Ideas") private ideasModel: Model<Ideas>) {}

  async create(createIdeaDto: CreateIdeaDto): Promise<Ideas> {
    const createdIdea = new this.ideasModel(createIdeaDto);
    createdIdea.status = 0;
    return createdIdea.save();
  }

  async findAll(): Promise<Ideas[]> {
    return this.ideasModel.find().exec();
  }

  async toggleStatus(id: string): Promise<Ideas> {
    const idea = await this.ideasModel.findOne({ _id: id });

    switch (idea.status) {
      case 0:
        idea.status = 1;
        break;
      case 1:
        idea.status = 2;
        break;
      case 2:
        idea.status = 0;
        break;
      default:
        idea.status = 1;
    }

    return idea.save();
  }

  async remove(id: string): Promise<Ideas> {
    return this.ideasModel.deleteOne({ _id: id }).exec();
  }
}
