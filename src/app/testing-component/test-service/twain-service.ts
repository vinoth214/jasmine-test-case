export class TwainService {
  public quote: 'Test quote';

  getQuote() {
    return new Promise<string>((resolve, reject) => {
      resolve(this.quote);
    });
  }
}