export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number) {
    const charctersArr = this.data.split("");
    const leftHand = charctersArr[leftIndex];
    charctersArr[leftIndex] = charctersArr[rightIndex];
    charctersArr[rightIndex] = leftHand;

    this.data = charctersArr.join("");
  }
}
