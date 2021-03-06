import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AboutService } from "./about.service";
import { AboutInput } from "./models/about.input";
import { About } from "./models/about.schema";

@Resolver(() => About)
export class AboutResolver {
  //
  constructor(
    @Inject(AboutService) private readonly aboutService: AboutService
  ) {}

  @Mutation(() => About)
  async addAbout(@Args("about") about: AboutInput): Promise<About> {
    return this.aboutService.addAbout(about);
  }

  @Mutation(() => About)
  async editAbout(@Args("about") about: AboutInput): Promise<About> {
    return this.aboutService.editAbout(about);
  }

  @Query(() => About)
  async getAbout(): Promise<About> {
    return this.aboutService.getSingle();
  }
}
