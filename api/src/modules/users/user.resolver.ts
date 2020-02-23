import { Inject } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ObjectId } from "bson";
import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
import { AddUserInput } from "./models/add-user.input";
import { User } from "./models/user.schema";
import { UserService } from "./user.service";
import { EditUserInput } from "./models/edit-user.input";

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject(UserService) private readonly usersService: UserService
  ) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async addUser(@Args("user") userInput: AddUserInput): Promise<User> {
    return this.usersService.add(userInput);
  }

  @Mutation(() => User)
  async editUser(@Args("user") userInput: EditUserInput): Promise<User> {
    return this.usersService.edit(userInput);
  }

  @Mutation(() => User)
  async deleteUser(
    @Args({ name: "userId", type: () => ObjectIdScalar }) userId: ObjectId
  ): Promise<ObjectId> {
    return this.usersService.delete(userId);
  }
}
