import { SleepAndWalk } from "../Interfaces/SleepAndWalk";
import { Animal } from "../Classes/Animal";
import { SingletonLoggerManager } from "../Classes/SingletonLoggerManager";

export class Elephant extends Animal implements SleepAndWalk {
    private weight: number;
    private loggerManager: SingletonLoggerManager; 

    constructor(name: string, age: number, weight: number, loggerManager: SingletonLoggerManager) { 
        super(name, age);
        this.weight = weight;
        this.loggerManager = loggerManager; 
    }

    makeSound(): void {
        this.loggerManager.log('Elephant makes sound'); 
    }

    sleep(): void {
        this.loggerManager.log('Elephant sleeps'); 
    }

    walk(): void {
        this.loggerManager.log('Elephant walks'); 
    }
}