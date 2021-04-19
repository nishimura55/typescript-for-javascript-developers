export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(newSecretNumber: number) {
    this._secretNumber = newSecretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('はむさん', 1234567890);

console.log(card.owner)
card.secretNumber = 55;

console.log(card.debugPrint());

console.log(card.secretNumber)