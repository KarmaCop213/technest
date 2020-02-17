import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  private readonly messageType = 'exchangeRate';
  private hasStarted = false;
  exchangeRate: Observable<number>;

  constructor(private socket: Socket) {
    this.exchangeRate = this.socket
      .fromEvent<number>(this.messageType)
      .pipe(map(data => data));
  }

  getExchangeRates() {
    if (!this.hasStarted) {
      this.hasStarted = true;
      this.socket.emit(this.messageType, {});
    }
  }

}
