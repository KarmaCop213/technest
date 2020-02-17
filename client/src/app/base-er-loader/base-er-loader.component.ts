import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExchangeRateService } from '../services/exchange-rate.service';

@Component({
  selector: 'app-base-er-loader',
  template: `NONE`,
  styleUrls: ['./base-er-loader.component.scss']
})
export class BaseErLoaderComponent implements OnInit, OnDestroy {
  exchangeRate: number;
  previousExchangeRate: number;
  private erSub: Subscription;

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this.erSub = this.exchangeRateService.exchangeRate.subscribe(er => {
      this.previousExchangeRate = this.exchangeRate;
      this.exchangeRate = er;
    });
    this.exchangeRateService.getExchangeRates();
  }
  ngOnDestroy() {
    this.erSub.unsubscribe();
  }

}
