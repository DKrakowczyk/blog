import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ReturnModelType } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "../common/scalars/object-id.scalar";
import { AddUserInput } from "./models/add-user.input";
import { User } from "./models/user.schema";
import { EditUserInput } from "./models/edit-user.input";
import { Role } from "./models/role.enum";
import { Roles } from "../auth/decorators/roles.decorator";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: ReturnModelType<typeof User>
  ) {}

  async findOne(id: ObjectIdScalar | ObjectId): Promise<User> {
    return this.userModel.findById(id);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async add(dto: AddUserInput): Promise<User> {
    const alreadyExist = await this.userModel.findOne({ email: dto.email });
    if (!alreadyExist) {
      const user = new this.userModel(dto);
      return user.save();
    } else {
      throw new Error(
        `User with email: "${dto.email}" already exist. Please log in.`
      );
    }
  }

  async edit(dto: EditUserInput): Promise<User> {
    const user = await this.userModel.findById(dto._id);
    if (!user) {
      throw new Error(`User with id: "${dto._id}" not found.`);
    }

    Object.assign(user, dto);

    return user.save();
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new Error(`User with id: "${id}" not found.`);
    }

    await user.remove();
    return id;
  }
}
