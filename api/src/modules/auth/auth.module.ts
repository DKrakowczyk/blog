import { Auth } from "./models/auth.schema";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { CommonModule } from "../common/common.module";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "../users/user.module";

@Module({
  imports: [CommonModule, UserModule],
  providers: [AuthResolver, AuthService]
})
export class AuthModule {}
