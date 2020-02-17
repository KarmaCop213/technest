import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyExchangeRatesGateway } from './currency-exchange-rates.gateway';

describe('CurrencyExchangeRatesGateway', () => {
  let gateway: CurrencyExchangeRatesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyExchangeRatesGateway],
    }).compile();

    gateway = module.get<CurrencyExchangeRatesGateway>(CurrencyExchangeRatesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
