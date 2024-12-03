import Multiplier from './multiplier';

export default class InputHandler {
  readonly mulInputs: Multiplier[] = [];

  addMultiplier(mulInput: string) {
    this.mulInputs.push(new Multiplier(mulInput));
  }

  getSumOfProducts(): number {
    let totalSum = 0;

    this.mulInputs.forEach((mul) => {
      totalSum += mul.product;
    });

    return totalSum;
  }
}
