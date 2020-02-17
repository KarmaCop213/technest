import { MessageType } from './messageType';
import { WsResponse } from '@nestjs/websockets';


export class ExchangeRateMessage implements WsResponse<number>{
  event: string;
  data: number;

  constructor(data: number) {
    this.event = MessageType.exchangeRate;
    this.data = data;
  }
}