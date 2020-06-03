import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./models/user.schema";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

const services = [UserService];
const resolvers = [UserResolver];

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [...services, ...resolvers],
  exports: [UserService]
})
export class UserModule {}
