import { Test } from '@nestjs/testing';
import { AccountsService } from './accounts.service';
import { getModelToken } from '@nestjs/mongoose';

describe('AccountsService', () => {
  let accountsService: AccountsService;

  const mockAccountModel = {
    find() {
      return 0;
    }
  };

  const mockTransactionModel = {
    find(arg: object) {
      return arg;
    }
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AccountsService,
        {
          provide: getModelToken('Account'),
          useValue: mockAccountModel,
        },
        {
          provide: getModelToken('Transaction'),
          useValue: mockTransactionModel,
        },
      ],
    }).compile();

    accountsService = module.get<AccountsService>(AccountsService);
  });

  it('should be defined', () => {
    expect(accountsService).toBeDefined();
  });

  it('should call mongoose Account Model on getAccountData', () => {
    mockAccountModel.find = () => 1;
    accountsService.getAccountData().then((res) => {
      expect(res).toBe(1)
    }).catch((error) => console.log('error', error))
  })

  it('should call mongoose Transaction Model on getAccountTransactions with the correct args', () => {
    accountsService.getAccountTransactions(1).then((res) => {
      expect(res).toEqual({ 'accountId': 1 });
    }).catch((error) => console.log('error', error))
  })
});
