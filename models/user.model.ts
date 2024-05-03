import mongoose from "mongoose";
import { Model } from "mongoose";
import { Document } from "mongoose";

export interface Userinterface {
  username: String;
  fullname: String;
  email: String;
  profilephoto: String;
}

export interface Userdocuments extends Userinterface, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userModel = new mongoose.Schema<Userdocuments>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilephoto: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const User: Model<Userdocuments> =
  mongoose?.models?.User || mongoose.model("User", userModel);
