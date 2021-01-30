// class Invoice {
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;
//     constructor(
//         readonly client: string, 
//         private details: string, 
//         public amount: number,
//     ){
//     }
//     format() {
//       return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
//   }
// interfaces
// export interface IsPerson {
//     name: string;
//     age?: number;
//     speak(a: string): void;
//     spend(a: number): number;
//   }
//   const me: IsPerson = {
//     name: 'shaun',
//     //age: 30,
//     speak(text: string): void {
//       console.log(text);
//     },
//     spend(amount: number): number {
//       console.log('I spent ', amount);
//       return amount;
//     },
//   };
// const greetPerson = (person: IsPerson): void => {
//     console.log('hello ', person.name);
//   }
//   greetPerson(me);
//   console.log(me);
import { Withdraw } from './classes/Withdraw.js';
import { Deposit } from './classes/deposit.js';
import { ListTemplate } from './classes/listtemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
//   const invOne = new Invoice('mario', 'work on the mario website', 250);
//   const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
//   let invoices: Invoice[] = [];
//   invoices.push(invOne)
//   invoices.push(invTwo);
//   // invoices.push({ name: 'shaun' });
//   invoices.forEach(inv => {
//     console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
//   })
const form = document.querySelector('.new-item-form');
//console.log(form.children);
// inputs
const type = document.querySelector('#type');
const amount = document.querySelector('#amount');
const Cardholder = document.querySelector('#Cardholder');
const cardnumber = document.querySelector('#cardnumber');
const expdate = document.querySelector('#expdate');
const cardcvv = document.querySelector('#cardcvv');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [amount.valueAsNumber, Cardholder.value, cardnumber.valueAsNumber, expdate.valueAsNumber, cardcvv.valueAsNumber];
    let doc;
    if (type.value === 'withdraw') {
        doc = new Withdraw(...values);
    }
    else {
        doc = new Deposit(...values);
        list.render(doc, type.value, 'end');
    }
});
