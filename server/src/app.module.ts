import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/accounts.module';
import { CurrencyExchangeRatesGateway } from './currency-exchange-rates.gateway';

@Module({
  imports: [AccountsModule, MongooseModule.forRoot('mongodb://localhost/technest', { useNewUrlParser: true, useUnifiedTopology: true })],
  controllers: [],
  providers: [CurrencyExchangeRatesGateway],
})
export class AppModule { }
