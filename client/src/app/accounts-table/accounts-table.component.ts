import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from '../interfaces/account.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-table',
  templateUrl: './accounts-table.component.html',
  styleUrls: ['./accounts-table.component.scss']
})
export class AccountsTableComponent implements OnInit {
  @Input() exchangeRate: number;
  @Input() previousExchangeRate: number;

  displayedColumns: string[] = ['accountName', 'category', 'tags', 'balance', 'availableBalance'];
  accounts: Account[] = [];

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.accountService.getAccounts().subscribe(result => {
      console.log('result', result)
      this.accounts = result;
    });
  }

  redirectToDetail(accountId: number) {
    this.router.navigate(['/accounts', accountId]);
  }
}
