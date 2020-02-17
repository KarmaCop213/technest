import { ExchangeRateService } from './exchange-rate.service';
import { of } from 'rxjs';
import { Socket } from 'ngx-socket-io';

describe('ExchangeRateService', () => {
  let service: ExchangeRateService;

  it('should be created', () => {
    const mockSocket = new Socket({ url: '' });
    mockSocket.fromEvent = () => of()
    service = new ExchangeRateService(mockSocket);

    expect(service).toBeTruthy();
  });

  it('should get exchange rate', () => {
    const mockSocket = new Socket({ url: '' });
    spyOn(mockSocket, 'emit');
    service = new ExchangeRateService(mockSocket);

    service.getExchangeRates();
    expect(mockSocket.emit).toHaveBeenCalledWith('exchangeRate', {});
  });

  it('should get exchange rate twice', () => {
    const mockSocket = new Socket({ url: '' });
    spyOn(mockSocket, 'emit');
    service = new ExchangeRateService(mockSocket);

    service.getExchangeRates();
    expect(mockSocket.emit).toHaveBeenCalledWith('exchangeRate', {});
    service.getExchangeRates();
    expect(mockSocket.emit).toHaveBeenCalledTimes(1);
  });

  it('should listen to socket when creating object', () => {
    const mockSocket = new Socket({ url: '' });

    spyOn(mockSocket, 'fromEvent').and.returnValue(of(1));

    service = new ExchangeRateService(mockSocket);

    expect(mockSocket.fromEvent).toHaveBeenCalledWith('exchangeRate');
    service.exchangeRate.subscribe(data => {
      expect(data).toEqual(1)
    })

  });
});
