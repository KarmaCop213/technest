import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  accountTd: Number,
  accountName: String,
  category: String,
  tags: [String],
  balance: Number,
  availableBalance: Number
}, { collection: 'accounts' });