import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../interfaces/account.interface';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:3000/accounts/list');
  }

  getAccountDetails(accountId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`http://localhost:3000/accounts/transactions/${accountId}`);
  }
}
