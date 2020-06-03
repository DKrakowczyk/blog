import { Module } from "@nestjs/common";
import { ObjectIdScalar } from "./scalars/object-id.scalar";

@Module({
  providers: [ObjectIdScalar]
})
export class CommonModule {}
