import { Schema, Document } from 'mongoose';
export const TweetSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  description: { type: String, required: true },
  createAt: { type: Date, required: true },
  updateAt: { type: Date, required: true },
  tweetIDs: { type: [Schema.Types.ObjectId] },
});

export interface Tweet {
  userId: Schema.Types.ObjectId;
  description: string;
  createAt: Date;
  updateAt: Date;
  tweetIDs: Array<Schema.Types.ObjectId>;
}
