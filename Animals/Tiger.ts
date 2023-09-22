import { SwimAndHunt } from "../Interfaces/SwimAndHunt";
import { Animal } from "../src/Animal";

export class Tiger extends Animal implements SwimAndHunt {
    private wasOutsideInLast8Hours:boolean;
  
    constructor(name:string, age:number, wasOutsideInLast8Hours:boolean){
        super(name, age);
        this.wasOutsideInLast8Hours = wasOutsideInLast8Hours;
        
    }
    makeSound():void{
        console.log('Tiger makes sound');
        
    }

    swim():void{   
        console.log('Tiger swims');   
    }
    hunt():void{
        console.log('Tiger hunts');   
    }
}