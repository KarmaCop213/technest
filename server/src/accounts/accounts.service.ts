import { Injectable } from '@nestjs/common';
import { Account } from './interfaces/account.interface';
import { Transaction } from './interfaces/transaction.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<Account>,
    @InjectModel('Transaction') private readonly transactionModel: Model<Transaction>) { }

  async getAccountData(): Promise<Account[]> {
    return await this.accountModel.find();
  }

  async getAccountTransactions(accountId: number): Promise<Transaction[]> {
    return await this.transactionModel.find({ 'accountId': accountId });
  }

}
