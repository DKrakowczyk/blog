import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { CreateIdeaDto } from "./dto/create-idea.dto";
import { Ideas } from "./ideas.interface";
import { IdeasService } from "./ideas.service";
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
