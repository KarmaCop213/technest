import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AccountsTableComponent } from './accounts-table.component';
import { AccountService } from '../services/account.service';
import { Account } from '../interfaces/account.interface';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('AccountsTableComponent', () => {
  let component: AccountsTableComponent;
  let fixture: ComponentFixture<AccountsTableComponent>;
  let router: Router;
  let mockAccountService = new AccountService(null);

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes([])],
        declarations: [AccountsTableComponent],
        providers: [{ provide: AccountService, useValue: mockAccountService }],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsTableComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    const dummy: Account[] = [{
      accountId: 0,
      accountName: '',
      category: '',
      tags: [''],
      balance: 0,
      availableBalance: 0
    }];

    spyOn(mockAccountService, 'getAccounts').and.returnValue(of(dummy))
    fixture.detectChanges();
    expect(mockAccountService.getAccounts).toHaveBeenCalled()
    expect(component.accounts).toEqual(dummy);
  });

  it('should redirect', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    component.redirectToDetail(1);
    expect(navigateSpy).toHaveBeenCalledWith(['/accounts', 1]);
  });
});
