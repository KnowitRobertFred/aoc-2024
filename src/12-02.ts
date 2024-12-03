import * as fs from 'fs';
import { Report, ReportHandler } from './12-02/models/classes';

const reportHandler = new ReportHandler();
// const inputData = fs.readFileSync('src/12-02/data/example.txt', 'utf-8');
const inputData = fs.readFileSync('src/12-02/data/input.txt', 'utf-8');
const numericRegex = /\d+/g;
const allLines = inputData.split('\n');

allLines.forEach((line) => {
  let matches;
  let levels = new Array<number>();
  while ((matches = numericRegex.exec(line)) !== null) {
    levels.push(parseInt(matches[0], 10));
  }
  const report = new Report(levels);
  reportHandler.addReport(report);
});

console.log(reportHandler.getSafeReports().length);
