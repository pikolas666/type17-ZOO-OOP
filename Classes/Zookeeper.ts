import { Animal } from "./Animal";
import { SingletonLoggerManager } from "../Classes/SingletonLoggerManager";

export class Zookeeper {
    private loggerManager: SingletonLoggerManager;
    constructor(loggerManager: SingletonLoggerManager) {
        this.loggerManager = loggerManager;
    }

    feedAnimal(animal: Animal): void {
        const feedingDateAndTime = new Date();
        const message = `${animal.constructor.name} was fed at ${feedingDateAndTime}`;
        this.loggerManager.log(message);
    }
}