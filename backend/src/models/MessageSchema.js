/**
 * @file MessageSchema.js
 * @description Mongoose schema and model for individual chat messages.
 * @module models/MessageSchema
 */

import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Conversation',
      required: true,
    },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    seen: { type: Boolean, default: false },
    delivered: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Message = mongoose.model('message', MessageSchema);
export default Message;
