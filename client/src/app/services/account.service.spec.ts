import { Transaction } from './../interfaces/transaction.interface';
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccountService } from './account.service';
import { Account } from '../interfaces/account.interface';

describe('AccountService', () => {
  let service: AccountService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountService]
    });

    injector = getTestBed();
    service = injector.get(AccountService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAccounts() should return data', () => {
    const dummy: Account[] = [{
      accountId: 0,
      accountName: '',
      category: '',
      tags: [''],
      balance: 0,
      availableBalance: 0
    }];

    service.getAccounts().subscribe(result => {
      expect(result).toEqual(dummy);
    })

    const req = httpMock.expectOne('http://localhost:3000/accounts/list');
    expect(req.request.method).toBe('GET');
    req.flush(dummy);

  })

  it('getAccountDetails() should return data', () => {
    const dummy: Transaction[] = [{
      accountId: 0,
      balance: 0,
      confirmedDate: new Date(2010, 1, 1),
      orderId: '',
      orderCode: '',
      transactionType: '',
      debit: 0,
      credit: 0
    }];

    const accountId = 1;

    service.getAccountDetails(accountId).subscribe(result => {
      expect(result).toEqual(dummy);
    })

    const req = httpMock.expectOne(`http://localhost:3000/accounts/transactions/${accountId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummy);

  })
});
