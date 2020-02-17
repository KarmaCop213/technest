import { BaseErLoaderComponent } from './../base-er-loader/base-er-loader.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent extends BaseErLoaderComponent implements OnInit {
}
