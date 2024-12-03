import * as fs from 'fs';
import ListPair from './12-01/models/listPair';

const numberRegex = /\d+/g;
// const input = fs.readFileSync('src/12-01/example.txt', 'utf-8');
const input = fs.readFileSync('src/12-01/input.txt', 'utf-8');
const listPair = new ListPair();

const lines = input.split('\n');
lines.forEach((line) => {
  {
    const match = line.match(numberRegex);
    if (match) {
      listPair.addLeftListNumber(parseInt(match[0], 10));
      listPair.addRightListNumber(parseInt(match[1], 10));
    }
  }
});

// listPair.orderLists();
let totalDifference = 0;
listPair.leftList.forEach((listItem) => {
  const occurances = listPair.rightList.filter((value) => listItem === value);

  const similarityScore = listItem * occurances.length;
  //   console.log(similarityScore);

  totalDifference += similarityScore;
});

console.log(totalDifference);
