import { ExchangeRateMessage } from './exchangeRateMessage';
import { MessageType } from './messageType';

describe('ExchangeRateMessage', () => {
  it('should instantiate correctly', () => {
    const message = new ExchangeRateMessage(123456);
    expect(message.data).toBe(123456);
    expect(message.event).toBe(MessageType.exchangeRate);
  })
});