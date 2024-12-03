export class ReportHandler {
  reports: Report[] = [];

  addReport(report: Report) {
    this.reports.push(report);
  }

  getSafeReports(): Report[] {
    const safeReports = this.reports.filter((report) => report.isSafe());

    return safeReports;
  }
}
export class Report {
  levels: number[];
  unsafeElements = 0;
  removedElement = false;

  constructor(levels: number[]) {
    this.levels = levels;
  }

  isSafe(): boolean {
    let combinationOk = true;
    const combinations = this.levels.map((_, index) => {
      return [...this.levels.slice(0, index), ...this.levels.slice(index + 1)];
    });

    for (const combination of combinations) {
      const ascOrDesc = this.isAscOrDesc(combination);
      const safeReport = this.isReportSafe(combination);
      combinationOk = ascOrDesc && safeReport;

      if (combinationOk) {
        break; // Avbryter loopen när en giltig kombination hittas
      }
    }
    return combinationOk;
  }

  isAscOrDesc(cripple: number[]): boolean {
    let isAsc = true;
    let isDesc = true;
    const sorted = cripple.toSorted((a, b) => a - b);
    sorted.forEach((value, index) => {
      if (value !== cripple[index]) {
        isAsc = false;
      }
      if (value !== cripple[cripple.length - 1 - index]) {
        isDesc = false;
      }
    });

    return isAsc || isDesc;
  }

  isReportSafe(cripple: number[]): boolean {
    let combinationSafe = true;
    cripple.forEach((value, index) => {
      if (index === cripple.length - 1) {
        return;
      }
      const diff = Math.abs(value - cripple[index + 1]);
      if (diff < 1 || diff > 3) {
        combinationSafe = false;
      }
    });

    return combinationSafe;
  }
}
