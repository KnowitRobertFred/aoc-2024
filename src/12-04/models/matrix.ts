import { dir } from 'console';

export default class Matrix {
  data: string[][] = [];
  readonly directions: number[][] = [
    // [0, 1],
    [1, 1],
    // [1, 0],
    [1, -1],
    // [0, -1],
    [-1, -1],
    // [-1, 0],
    [-1, 1],
  ];
  readonly noOfRows: number;
  readonly noOfColumns: number;
  numberOfHits = 0;

  constructor(data: string[][]) {
    this.data = data;
    this.noOfRows = data.length;
    this.noOfColumns = data[0].length;
  }

  searchForString(stringValue: string) {
    this.numberOfHits = 0;
    for (let row = 0; row < this.noOfRows; row++) {
      for (let column = 0; column < this.noOfColumns; column++) {
        for (const [nextRow, nextColumn] of this.directions) {
          if (this.isMatch(row, column, nextRow, nextColumn, stringValue)) {
            this.numberOfHits++;
          }
        }
      }
    }
  }

  isMatch(
    currentRow: number,
    currentColumn: number,
    nextRow: number,
    nextColumn: number,
    searchedString: string
  ): boolean {
    const stringLenght = searchedString.length;
    for (let charIndex = 0; charIndex < stringLenght; charIndex++) {
      if (
        currentRow < 0 ||
        currentRow >= this.noOfRows ||
        currentColumn < 0 ||
        currentColumn >= this.noOfColumns
      ) {
        return false;
      }

      if (this.data[currentRow][currentColumn] !== searchedString[charIndex]) {
        return false;
      }
      currentRow += nextRow;
      currentColumn += nextColumn;
    }

    return true;
  }

  findFriendMas(
    topLeftRow: number,
    topLeftColumn: number,
    nextLine: number,
    nextColumn: number,
    searchedString: string
  ) {}
}
