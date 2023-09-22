import { Logger } from "../Interfaces/Logger";

export class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message);
    }
}
