import { Client } from "../client/client";
import BaseEvent from "../utils/BaseEvent";

export default class ApiPointsAddedEvent extends BaseEvent {
    constructor() {
        super("api-points-rewarded");
    }
    async run(client: Client) {}
}
