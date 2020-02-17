import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { Account } from './interfaces/account.interface';
import { Transaction } from './interfaces/transaction.interface';

describe('Accounts Controller', () => {
  let accountsController: AccountsController;
  let accountsService: AccountsService;

  beforeEach(async () => {
    accountsService = new AccountsService(null, null);
    accountsController = new AccountsController(accountsService);
  });

  describe('getAccountData', () => {
    it('should call endpoint and receive result from service', () => {
      const mockAccount: Account[] = [{
        accountName: '',
        category: '',
        tags: ['', ''],
        balance: 0,
        availableBalance: 0
      }]
      jest.spyOn(accountsService, 'getAccountData').mockImplementation(() => Promise.resolve(mockAccount));
      accountsController.getAccountData().then((res) => expect(res).toEqual(mockAccount));
    })
  });

  describe('getAccountTransactions', () => {
    const mockTransaction: Transaction[] = [{
      accountId: 0,
      confirmedDate: new Date(),
      orderId: 'string',
      orderCode: 'string',
      transactionType: 'string',
      debit: 0,
      credit: 0,
      balance: 0,
    }]
    it('should call endpoint and receive result from service', () => {
      jest.spyOn(accountsService, 'getAccountTransactions').mockImplementation(() => Promise.resolve(mockTransaction));
      accountsController.getAccountTransactions({ accountId: 1 }).then((res) => expect(res).toEqual(mockTransaction));
    })

    it('should call service with right argument', () => {
      let arg = 0;
      jest.spyOn(accountsService, 'getAccountTransactions').mockImplementation((accountId) => {
        arg = accountId;
        return Promise.resolve(mockTransaction)
      });
      accountsController.getAccountTransactions({ accountId: 1 }).then(() => expect(arg).toEqual(1));
    })
  });

});
