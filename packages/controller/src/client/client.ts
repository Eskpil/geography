/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { EventEmitter } from "ws";
import BaseEvent from "../utils/BaseEvent";
import { WSClient } from "./ws";

interface IClient {
    mutate: () => Promise<void>;
    query: () => Promise<void>;
    connect: (token: string) => void;
}

export declare interface Client {
    ws: WSClient;
    events: Map<string, BaseEvent>;
}

export class Client extends EventEmitter implements IClient {
    constructor() {
        super();
        this.ws = new WSClient(this);
        this.events = new Map<string, BaseEvent>();
    }

    async mutate() {}
    async query() {}
    async connect(token: string) {
        try {
            this.ws.init(token);
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
}
