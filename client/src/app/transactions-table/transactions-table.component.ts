import { Transaction } from './../interfaces/transaction.interface';
import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss']
})
export class TransactionsTableComponent implements OnInit {
  @Input() accountId: number;
  @Input() exchangeRate: number;
  @Input() previousExchangeRate: number;

  displayedColumns: string[] = ['confirmedDate', 'orderId', 'orderCode', 'transactionType', 'debit', 'credit', 'balance'];
  transactions: Transaction[] = [];

  constructor(private accountService: AccountService, ) { }

  ngOnInit(): void {
    this.accountService.getAccountDetails(this.accountId).subscribe(result => {
      this.transactions = result;
    });
  }

}
