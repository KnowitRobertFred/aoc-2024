import * as fs from 'fs';
import InputHandler from './12-03/models/inputHandler';

const mulRegex = /mul\(\d+\,\d+\)/g;
// const input = fs.readFileSync('src/12-03/data/example.txt', 'utf-8');
const input = fs.readFileSync('src/12-03/data/input.txt', 'utf-8');
const dos = input.split('do()');
let toCountWithDos: string[] = [];
dos.forEach((mul) => {
  const tmp = mul.split("don't()");
  toCountWithDos.push(tmp[0]);
});

const inputHandler = new InputHandler();

let matches;
toCountWithDos.forEach((line) => {
  while ((matches = mulRegex.exec(line)) !== null) {
    inputHandler.addMultiplier(matches[0]);
  }
});
console.log(inputHandler.getSumOfProducts());
