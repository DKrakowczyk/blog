import * as mongoose from "mongoose";

export const IdeasSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Number
});
