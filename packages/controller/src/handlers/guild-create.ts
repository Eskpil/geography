import { Client } from "@urql/core";
import BaseEvent from "../utils/BaseEvent";

export default class GuildCreateEvent extends BaseEvent {
    constructor() {
        super("guild_create");
    }
    async run(_: any, payload: any) {
        console.log(payload);
    }
}
