import { Document } from "mongoose";

export interface Ideas extends Document {
  readonly title: string;
  readonly description: string;
  readonly status: number;
}
