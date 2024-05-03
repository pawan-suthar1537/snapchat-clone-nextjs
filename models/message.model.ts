import mongoose, { Model, Types } from "mongoose";
import { Userdocuments } from "./user.model";
import { PopulatedDoc } from "mongoose";
import { Document } from "mongoose";

export interface Messageinterface {
  senderId: Types.ObjectId | PopulatedDoc<Userdocuments>;
  receiverId: Types.ObjectId | PopulatedDoc<Userdocuments>;
  content: String;
  messageType: "text" | "image";
  isopen: Boolean;
}

export interface Messagedocuments extends Messageinterface, Document {
  createdAt: Date;
  updatedAt: Date;
}

const messageModel = new mongoose.Schema<Messagedocuments>(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    messageType: {
      type: String,
      required: true,
      enum: ["text", "image"],
    },
    isopen: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Message: Model<Messagedocuments> =
  mongoose?.models?.Message || mongoose.model("Message", messageModel);
