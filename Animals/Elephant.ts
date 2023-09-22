import { SleepAndWalk } from "../Interfaces/SleepAndWalk";
import { Animal } from "../src/Animal";

export class Elephant extends Animal implements SleepAndWalk {
    private weight:number;
  
    constructor(name:string, age:number, weight:number){
        super(name, age);
        this.weight = weight;
        
    }
    makeSound():void{
        console.log('Elephant makes sound');
        
    }

    sleep():void{   
        console.log('Elephant sleeps');   
    }
    walk():void{
        console.log('Elephant walks');   
    }
}