import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsComponent } from './accounts.component';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { of } from 'rxjs';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;
  let mockExchangeRateService = {
    fromEvent: () => { },
    exchangeRate: {
      subscribe: () => of(1)
    },
    getExchangeRates: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsComponent],
      providers: [{ provide: ExchangeRateService, useValue: mockExchangeRateService }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
