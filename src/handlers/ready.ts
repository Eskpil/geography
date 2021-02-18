/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Client } from "../client/client";
import BaseEvent from "../utils/BaseEvent";

export default class ReadyEvent extends BaseEvent {
    constructor() {
        super("ready");
    }
    async run(client: Client, payload: any) {
        return console.log(client, payload);
    }
}
