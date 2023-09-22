import { Elephant } from "../Animals/Elephant";
import { Tiger } from "../Animals/Tiger";
import { Zebra } from "../Animals/Zebra";
import { Zookeper } from "./Zookeper";

const zebra = new Zebra('Marty', 10, 65, 'Africa');
zebra.makeSound();
zebra.run();

const elephant = new Elephant('Burt', 40, 3000);
elephant.makeSound();
elephant.sleep();

const tiger = new Tiger('Vitaly', 15, false);
tiger.makeSound();
//Simulate tiger release outside the cage here:
// tiger.hunt();
// tiger.swim()
tiger.checkIfwasOutsideInLast8HoursAndSet();

const zookeper = new Zookeper();
zookeper.feedAnimal(tiger);