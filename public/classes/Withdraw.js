export class Withdraw {
    constructor(cardnumber, cardholder, amount, expdate, cardcvv) {
        this.cardnumber = cardnumber;
        this.cardholder = cardholder;
        this.amount = amount;
        this.expdate = expdate;
        this.cardcvv = cardcvv;
    }
    ;
    format() {
        return ` Amount is $${this.amount} for ${this.cardholder}, Card Number ${this.cardnumber}, Expiration Date ${this.expdate}, CVV ${this.cardcvv}`;
    }
}
