import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { Module } from "@nestjs/common";
import { UserModule } from "../users/user.module";

@Module({
  imports: [UserModule],
  providers: [AuthResolver, AuthService]
})
export class AuthModule {}
