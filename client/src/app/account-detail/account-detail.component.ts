import { BaseErLoaderComponent } from './../base-er-loader/base-er-loader.component';
import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent extends BaseErLoaderComponent implements OnInit {
  accountId: number;

  constructor(exchangeRateService: ExchangeRateService, private activatedRoute: ActivatedRoute) {
    super(exchangeRateService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.accountId = this.activatedRoute.snapshot.params.accountId;
  }


}
