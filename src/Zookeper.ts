import { Animal } from "./Animal";

export class Zookeper {
    feedAnimal(animal:Animal){
        const feedingDateandTime = new Date();
        console.log(`${animal} was fed at ${feedingDateandTime}`);
    }
}