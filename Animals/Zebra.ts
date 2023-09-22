import { JumpAndRun } from "../Interfaces/JumpAndRun";
import { Animal } from "../src/Animal";

export class Zebra extends Animal implements JumpAndRun {
    private maxSpeed:number;
    private origin:string;
    constructor(name:string, age:number, maxSpeed:number, origin:string){
        super(name, age);
        this.maxSpeed = maxSpeed;
        this.origin = origin;
    }
    makeSound():void{
        console.log('Zebra makes sound');
        
    }

    jump():void{
        console.log('Zebra jumps');   
    }
    run():void{
        console.log('Zebra runs');   
    }
}