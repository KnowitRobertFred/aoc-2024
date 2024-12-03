export default class ListPair {
  leftList: number[] = [];
  rightList: number[] = [];

  constructor() {}

  addLeftListNumber(left: number) {
    this.leftList.push(left);
  }

  addRightListNumber(right: number) {
    this.rightList.push(right);
  }

  orderLists() {
    this.leftList.sort();
    this.rightList.sort();
  }
}
