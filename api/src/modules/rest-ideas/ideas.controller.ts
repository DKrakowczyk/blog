import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Delete,
  Param,
  Put
} from "@nestjs/common";
import { Request } from "express";
import { InjectModel } from "@nestjs/mongoose";
import { Ideas } from "./ideas.interface";
import { IdeasService } from "./ideas.service";
import { CreateIdeaDto } from "./dto/create-idea.dto";
@Controller("ideas")
export class IdeasController {
  constructor(private readonly ideasService: IdeasService) {}
  @Get()
  async findAll(): Promise<Ideas[]> {
    return this.ideasService.findAll();
  }

  @Post()
  async add(@Body() createIdeaDto: CreateIdeaDto) {
    await this.ideasService.create(createIdeaDto);
  }

  @Delete(":id")
  async remove(@Param() params) {
    return this.ideasService.remove(params.id);
  }

  @Put(":id")
  async changeStatus(@Param() params) {
    return this.ideasService.toggleStatus(params.id);
  }
}
