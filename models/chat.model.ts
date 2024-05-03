import { Model } from "mongoose";
import { Document } from "mongoose";
import { Types } from "mongoose";

const mongoose = require("mongoose");

export interface Chatinterface {
  participants: Types.ObjectId[];
  message: Types.ObjectId[];
}

export interface chatDocument extends Chatinterface, Document {
  createdAt: Date;
  updatedAt: Date;
}

const chatModel = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Chat: Model<chatDocument> =
  mongoose?.models?.Chat || mongoose.model("Chat", chatModel);
