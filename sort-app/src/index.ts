import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([4, 2, 5, 777, 4, 3, 1, 2, 3]);

const charactersCollection = new CharactersCollection("eDkegmdLdkieOdlaaakdB");

const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();

const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();

console.log(charactersCollection.data);
