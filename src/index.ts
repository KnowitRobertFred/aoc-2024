import * as fs from 'fs';

const rules: number[][] = [];
const ruleRegexp = /\d+/g;

const prints: number[][] = [];

let totalSumCorrectPrints = 0;
let totalSumInCorrectPrints = 0;

readPrints();
readAllRules();

prints.forEach((print) => {
  const printRules = readRelevantRules(print);
  const outputOrder = establishOrder(printRules);

  if (comparePrintToRules(print, outputOrder)) {
    const middleValue = outputOrder[Math.floor(print.length / 2)];
    totalSumCorrectPrints += middleValue;
  } else {
    console.log(outputOrder);
    const middleValue = outputOrder[Math.floor(print.length / 2)];
    totalSumInCorrectPrints += middleValue;
  }
});

console.log(totalSumInCorrectPrints);

function readPrints() {
  const printsStr = fs.readFileSync('src/12-05/data/prints.txt', 'utf-8');
  printsStr.split('\n').forEach((print) => {
    const tmpPrint: number[] = [];
    let matches;
    while ((matches = ruleRegexp.exec(print)) !== null) {
      tmpPrint.push(parseInt(matches[0]));
    }

    prints.push(tmpPrint);
  });
}

function readRelevantRules(print: number[]): number[][] {
  const tmpRule: number[][] = [];
  rules.forEach((rule) => {
    if (print.includes(rule[0]) && print.includes(rule[1])) {
      tmpRule.push(rule);
    }
  });

  return tmpRule;
}

function readAllRules() {
  const allRules = fs.readFileSync('src/12-05/data/rules.txt', 'utf-8');
  allRules.split('\n').forEach((line) => {
    const matches = line.match(ruleRegexp);
    if (!matches) {
      throw new Error('No number in rule');
    }

    const rule = [parseInt(matches[0]), parseInt(matches[1])];
    rules.push(rule);
  });
}

function establishOrder(printRules: number[][]): number[] {
  let rulesToProcess = [...printRules];
  const outputOrder: number[] = [];

  while (rulesToProcess.length > 0) {
    const firstElements = rulesToProcess.map((rule) => rule[0]);
    const secondElements = rulesToProcess.map((rule) => rule[1]);

    const nextElement = firstElements.find(
      (element) => !secondElements.includes(element)
    );

    if (!nextElement) {
      throw new Error('No element found');
    }

    outputOrder.push(nextElement);

    if (rulesToProcess.length === 1) {
      outputOrder.push(secondElements[0]);
    }

    rulesToProcess = rulesToProcess.filter((rule) => rule[0] !== nextElement);
  }

  return outputOrder;
}

function comparePrintToRules(print: number[], printRules: number[]): boolean {
  return (
    print.every((value, index) => value === printRules[index]) &&
    print.length === printRules.length
  );
}
