import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([4, 2, 5, 777, 4, 3, 1, 2, 3]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
