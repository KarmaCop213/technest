import { Controller, Get, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './interfaces/account.interface';
import { Transaction } from './interfaces/transaction.interface';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) { }

  @Get('list')
  async getAccountData(): Promise<Account[]> {
    return await this.accountsService.getAccountData();
  }

  @Get('transactions/:accountId')
  async getAccountTransactions(@Param() params): Promise<Transaction[]> {
    return await this.accountsService.getAccountTransactions(params.accountId);
  }
}
