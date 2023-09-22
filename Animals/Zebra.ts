import { JumpAndRun } from "../Interfaces/JumpAndRun";
import { SleepAndWalk } from "../Interfaces/SleepAndWalk";
import { Animal } from "../Classes/Animal";
import { SingletonLoggerManager } from "../Classes/SingletonLoggerManager";

export class Zebra extends Animal implements JumpAndRun, SleepAndWalk {
    private maxSpeed: number;
    private origin: string;
    private loggerManager: SingletonLoggerManager; 
    constructor(name: string, age: number, maxSpeed: number, origin: string, loggerManager: SingletonLoggerManager) {
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
        this.loggerManager = loggerManager; 
    }

    makeSound(): void {
        this.loggerManager.log('Zebra makes sound'); 
    }

    jump(): void {
        this.loggerManager.log('Zebra jumps'); 
    }

    run(): void {
        this.loggerManager.log('Zebra runs'); 
    }
    sleep():void {
        this.loggerManager.log('Zebra is sleeping'); 
    }
    walk():void {
        this.loggerManager.log('Zebra is walking'); 
    }
}