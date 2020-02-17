import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTableComponent } from './transactions-table.component';
import { of } from 'rxjs';
import { AccountService } from '../services/account.service';
import { Transaction } from '../interfaces/transaction.interface';

describe('TransactionsTableComponent', () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;
  let mockAccountService = new AccountService(null);

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TransactionsTableComponent],
        providers: [{ provide: AccountService, useValue: mockAccountService }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
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

    component.accountId = 1;
    spyOn(mockAccountService, 'getAccountDetails').and.returnValue(of(dummy))
    fixture.detectChanges();
    expect(mockAccountService.getAccountDetails).toHaveBeenCalledWith(1)
    expect(component.transactions).toEqual(dummy);
  });
});
