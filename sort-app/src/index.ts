import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([4, 2, 5, 777, 4, 3, 1, 2, 3]);

const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();

const charactersCollection = new CharactersCollection("eDkegmdLdkieOdlaaakdB");

const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();

const linkedList = new LinkedList();
linkedList.add(99);
linkedList.add(33);
linkedList.add(4);
linkedList.add(2);

const linkedListSorter = new Sorter(linkedList);
linkedList.print();
linkedListSorter.sort();
linkedList.print();
