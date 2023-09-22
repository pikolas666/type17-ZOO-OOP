export abstract class Animal {
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    abstract makeSound():void;
}