import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([4, 2, 5, 777, 4, 3, 1, 2, 3]);
const charactersCollection = new CharactersCollection("eDkegmdLdkieOdlaaakdB");

const linkedList = new LinkedList();
linkedList.add(99);
linkedList.add(33);
linkedList.add(150);
linkedList.add(2);

linkedList.sort();

linkedList.print();
