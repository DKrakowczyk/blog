import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { AboutInput } from "./models/about.input";
import { About } from "./models/about.schema";

@Injectable()
export class AboutService {
  //
  constructor(
    @InjectModel(About.name)
    private readonly aboutModel: ReturnModelType<typeof About>
  ) {}

  async getSingle(): Promise<About> {
    return this.aboutModel.findOne();
  }
  async addAbout(about: AboutInput): Promise<About> {
    return new this.aboutModel(about).save();
  }
  async editAbout(about: AboutInput): Promise<About> {
    let aboutToEdit = await this.aboutModel.findOne();
    Object.assign(aboutToEdit, about);
    return aboutToEdit.save();
  }
}
