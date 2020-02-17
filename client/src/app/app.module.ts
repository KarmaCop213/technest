import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { HighlightDirective } from './highlight.directive';
import { BaseErLoaderComponent } from './base-er-loader/base-er-loader.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

const appRoutes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/:accountId', component: AccountDetailComponent },
  {
    path: '',
    redirectTo: '/accounts',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccountsTableComponent,
    AccountsComponent,
    AccountDetailComponent,
    TransactionsTableComponent,
    HighlightDirective,
    BaseErLoaderComponent
  ],
  imports: [
    MatTableModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
