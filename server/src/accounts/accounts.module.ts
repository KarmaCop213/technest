import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { AccountSchema } from './schemas/account.schema';
import { TransactionSchema } from './schemas/transaction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]),
    MongooseModule.forFeature([{ name: 'Transaction', schema: TransactionSchema }])
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule { }
