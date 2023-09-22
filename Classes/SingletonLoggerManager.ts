import { Logger } from "../Interfaces/Logger";

export class SingletonLoggerManager {
    private static instance: SingletonLoggerManager;
    private logs: string[] = [];
    private logger: Logger;

    private constructor(logger: Logger) {
        this.logger = logger;
    }

    static getInstance(logger: Logger): SingletonLoggerManager {
        if (!this.instance) {
            this.instance = new SingletonLoggerManager(logger);
        }
        return this.instance;
    }

    log(message: string): void {
        this.logs.push(message);
        this.logger.log(message);
    }

    getLogs(): string[] {
        return this.logs;
    }
}
