import { SwimAndHunt } from "../Interfaces/SwimAndHunt";
import { Animal } from "../src/Animal";

export class Tiger extends Animal implements SwimAndHunt {
    private wasOutsideInLast8Hours:boolean;
    // additional parameter:
    private outOfTheCageTimeStamp: Date;
    constructor(name:string, age:number, wasOutsideInLast8Hours:boolean, outOfTheCageTimeStamp:Date=null){
        super(name, age);
        this.wasOutsideInLast8Hours = wasOutsideInLast8Hours;
        this.outOfTheCageTimeStamp = outOfTheCageTimeStamp;
        
    }
    makeSound():void{
        console.log('Tiger makes sound');
        
    }

    swim():boolean{   
        this.outOfTheCageTimeStamp = new Date()
        console.log('Tiger swims');  
        return this.wasOutsideInLast8Hours = true;
    }
    hunt():boolean{
        this.outOfTheCageTimeStamp = new Date()
        console.log('Tiger hunts');
        return this.wasOutsideInLast8Hours = true;   
    }
    //additional method:
    checkIfwasOutsideInLast8HoursAndSet(): boolean {
        if (this.outOfTheCageTimeStamp === null) {
            this.wasOutsideInLast8Hours = false;
        } else {
            const newTimeAndDateStamp = new Date();
            const timeDifference = newTimeAndDateStamp.getTime() - this.outOfTheCageTimeStamp.getTime();
            const eightHoursInMillis = 8 * 60 * 60 * 1000;
            this.wasOutsideInLast8Hours = timeDifference < eightHoursInMillis;
        }
        console.log(this.wasOutsideInLast8Hours ? 'Tiger was outside the cage in the past 8h' : 'Tiger was inside the cage in the past 8h');   
        return this.wasOutsideInLast8Hours;
    }
}    