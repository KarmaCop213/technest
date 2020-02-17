import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseErLoaderComponent } from './base-er-loader.component';
import { ExchangeRateService } from '../services/exchange-rate.service';

describe('BaseErLoaderComponent', () => {
  let component: BaseErLoaderComponent;
  let fixture: ComponentFixture<BaseErLoaderComponent>;
  let mockExchangeRateService;

  beforeEach(() => {
    mockExchangeRateService = {
      exchangeRate: {
        subscribe: (callback) => callback(1)
      },
      getExchangeRates: () => { }
    };

    mockExchangeRateService.getExchangeRates = jasmine.createSpy();

    TestBed.configureTestingModule({
      declarations: [BaseErLoaderComponent],
      providers: [
        { provide: ExchangeRateService, useValue: mockExchangeRateService }
      ]
    });

    fixture = TestBed.createComponent(BaseErLoaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init correctly', () => {
    fixture.detectChanges();
    expect(component.exchangeRate).toEqual(1);
    expect(component.previousExchangeRate).toBeUndefined();
    expect(mockExchangeRateService.getExchangeRates).toHaveBeenCalled();
  });
});
