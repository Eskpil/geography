/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Client } from "../client/client";

export default abstract class BaseEvent {
    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }
    abstract run(client: Client, ...args: any): void;
}
