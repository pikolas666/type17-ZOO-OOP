import { Elephant } from "../Animals/Elephant";
import { Tiger } from "../Animals/Tiger";
import { Zebra } from "../Animals/Zebra";
import { Zookeeper } from "../Classes/Zookeeper";
import { ConsoleLogger} from "../Classes/ConsoleLogger";
import { SingletonLoggerManager } from "../Classes/SingletonLoggerManager";


const consoleLogger = new ConsoleLogger();
const loggerManager = SingletonLoggerManager.getInstance(consoleLogger);

const zebra = new Zebra('Marty', 10, 65, 'Africa',loggerManager);
zebra.makeSound();
zebra.run();

const elephant = new Elephant('Burt', 40, 3000, loggerManager);
elephant.makeSound();
elephant.sleep();

const tiger = new Tiger('Vitaly', 15, false, loggerManager);
tiger.makeSound();
//Simulate tiger release outside the cage here:
// tiger.hunt();
// tiger.swim()
tiger.checkIfwasOutsideInLast8HoursAndSet();

const zookeeper = new Zookeeper(loggerManager);
zookeeper.feedAnimal(elephant);

console.log("Logged Messages:", loggerManager.getLogs());