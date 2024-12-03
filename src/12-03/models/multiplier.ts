import { parentPort } from 'worker_threads';

export default class Multiplier {
  readonly numRegex = /\d+/g;
  readonly factorOne: number;
  readonly factorTwo: number;
  readonly product: number;

  constructor(input: string) {
    const matches = input.match(this.numRegex);
    if (matches === null) {
      throw new Error('No matches found!');
    }

    this.factorOne = parseInt(matches[0]);
    this.factorTwo = parseInt(matches[1]);
    this.product = this.factorOne * this.factorTwo;
  }
}
