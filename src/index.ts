import * as fs from 'fs';
import Matrix from './12-04/models/matrix';

const input = fs.readFileSync('src/12-04/data/input.txt', 'utf-8');
const lines = input.split('\n');
let data: string[][] = [];
lines.forEach((line) => {
  const row = line.split('');
  data.push(row);
});

const matrix = new Matrix(data);
matrix.searchForString('XMAS');

console.log(matrix.numberOfHits);
