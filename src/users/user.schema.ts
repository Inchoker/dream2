import { Schema } from 'mongoose';
export const UserSchema = new Schema(
  {
    userName: {
      type: String,
      require: true,
      index: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);
