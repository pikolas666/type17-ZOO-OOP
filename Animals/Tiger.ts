import { JumpAndRun } from "../Interfaces/JumpAndRun";
import { SleepAndWalk } from "../Interfaces/SleepAndWalk";
import { SwimAndHunt } from "../Interfaces/SwimAndHunt";
import { Animal } from "../Classes/Animal";
import { SingletonLoggerManager } from "../Classes/SingletonLoggerManager";

export class Tiger extends Animal implements SwimAndHunt, SleepAndWalk, JumpAndRun {
    private wasOutsideInLast8Hours: boolean;
    private outOfTheCageTimeStamp: Date;
    private loggerManager: SingletonLoggerManager; 

    constructor(name: string, age: number, wasOutsideInLast8Hours: boolean, loggerManager: SingletonLoggerManager, outOfTheCageTimeStamp: Date = null) { 
        super(name, age);
        this.wasOutsideInLast8Hours = wasOutsideInLast8Hours;
        this.outOfTheCageTimeStamp = outOfTheCageTimeStamp;
        this.loggerManager = loggerManager; 
    }

    makeSound(): void {
        this.loggerManager.log('Tiger makes sound'); 
    }
    jump():void {
        this.loggerManager.log('Tiger is jumping'); 
    }
    run():void {
        this.loggerManager.log('Tiger is running'); 
    }

    sleep():void {
        this.loggerManager.log('Tiger is sleeping'); 
    }
    walk():void {
        this.loggerManager.log('Tiger is walking'); 
    }

    swim(): boolean {
        this.outOfTheCageTimeStamp = new Date();
        this.loggerManager.log('Tiger swims'); 
        return this.wasOutsideInLast8Hours = true;
    }

    hunt(): boolean {
        this.outOfTheCageTimeStamp = new Date();
        this.loggerManager.log('Tiger hunts'); 
        return this.wasOutsideInLast8Hours = true;
    }

    checkIfwasOutsideInLast8HoursAndSet(): boolean {
        if (this.outOfTheCageTimeStamp === null) {
            this.wasOutsideInLast8Hours = false;
        } else {
            const newTimeAndDateStamp = new Date();
            const timeDifference = newTimeAndDateStamp.getTime() - this.outOfTheCageTimeStamp.getTime();
            const eightHoursInMillis = 8 * 60 * 60 * 1000;
            this.wasOutsideInLast8Hours = timeDifference < eightHoursInMillis;
        }
        this.loggerManager.log(this.wasOutsideInLast8Hours ? 'Tiger was outside the cage in the past 8h' : 'Tiger was inside the cage in the past 8h');
        return this.wasOutsideInLast8Hours;
    }
}