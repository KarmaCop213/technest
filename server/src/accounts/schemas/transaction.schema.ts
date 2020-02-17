import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
  accountId: Number,
  confirmedDate: Date,
  orderId: String,
  orderCode: String,
  transactionType: String,
  debit: Number,
  credit: Number,
  balance: Number,
}, { collection: 'transactions' });