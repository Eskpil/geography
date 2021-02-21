/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { EventEmitter } from "ws";
import BaseEvent from "../utils/BaseEvent";
import {
    Client as UrqlClient,
    defaultExchanges,
    subscriptionExchange,
} from "@urql/core";
import ws from "ws";
import { WSClient } from "./ws";

import { SubscriptionClient } from "subscriptions-transport-ws";
import { User } from "../models/user";
import { Register } from "../utils/register";
import { HttpClient } from "./http";
import { BaseChannel } from "../models/channels/BaseChannel";
import { Guild } from "../models/guild";
import { Emoji } from "../models/emoji";
import { Message } from "../models/message";

const subscriptionClient = new SubscriptionClient(
    "ws://localhost:4000/graphql",
    {
        reconnect: true,
    },
    ws
);

interface IClient {
    mutate: () => Promise<void>;
    query: () => Promise<void>;
    connect: (token: string) => void;
}

export declare interface Client {
    ws: WSClient;
    events: Map<string, BaseEvent>;
    urql: UrqlClient;
    user: User | null;
    register: Register;
    http: HttpClient;

    emojis: Map<string, Emoji>;
    guilds: Map<string, Guild>;
    users: Map<string, User>;
    channels: Map<string, BaseChannel>;
    messages: Map<string, Message>;
}

export class Client extends EventEmitter implements IClient {
    constructor() {
        super();
        this.user = null;
        this.ws = new WSClient(this);
        this.events = new Map<string, BaseEvent>();
        this.register = new Register(this);
        this.http = new HttpClient();

        this.emojis = new Map<string, Emoji>();
        this.guilds = new Map<string, Guild>();
        this.users = new Map<string, User>();
        this.channels = new Map<string, BaseChannel>();
        this.messages = new Map<string, Message>();

        this.urql = new UrqlClient({
            url: "http://localhost:4000/graphql",
            exchanges: [
                ...defaultExchanges,
                subscriptionExchange({
                    forwardSubscription(operation) {
                        return subscriptionClient.request(operation);
                    },
                }),
            ],
        });
    }

    async mutate() {}
    async query() {}
    async connect(token: string) {
        try {
            this.http.token = token;
            this.ws.init(token);
        } catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }
}
