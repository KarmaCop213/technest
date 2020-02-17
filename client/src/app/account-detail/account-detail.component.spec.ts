import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailComponent } from './account-detail.component';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('AccountDetailComponent', () => {
  let component: AccountDetailComponent;
  let fixture: ComponentFixture<AccountDetailComponent>;
  let mockExchangeRateService = {
    fromEvent: () => { },
    exchangeRate: {
      subscribe: () => of(1)
    },
    getExchangeRates: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [AccountDetailComponent],
      providers: [
        { provide: ExchangeRateService, useValue: mockExchangeRateService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                accountId: 1
              },
            },
          }
        }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set accountId', () => {
    expect(component.accountId).toEqual(1);
  });
});
