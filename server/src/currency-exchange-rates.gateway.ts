import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageType } from './socketMessages/messageType';
import { ExchangeRateMessage } from './socketMessages/exchangeRateMessage';



@WebSocketGateway()
export class CurrencyExchangeRatesGateway {
  private readonly exchangeRates = [1, 2, 3, 4, 4, 3, 2, 1];
  private readonly intervalInSeconds = 15;

  @SubscribeMessage<MessageType>(MessageType.exchangeRate)
  handleMessage(): Observable<ExchangeRateMessage> {
    return timer(0, this.intervalInSeconds * 1000).pipe(
      map((index: number) => new ExchangeRateMessage(this.exchangeRates[index % this.exchangeRates.length])));
  }
}


