import { HasFormatter } from '../interface/hasformatter.js';

export class Payment implements HasFormatter{
  constructor(
    private cardnumber: number,
    public cardholder: string,
    public amount: number,
    public expdate:number,
    private cardcvv:number

  ){};

  format() {
    return` Amount is $${this.amount} for ${this.cardholder}, Card Number ${this.cardnumber}, Expiration Date ${this.expdate}, CVV ${this.cardcvv}`;
  }
}