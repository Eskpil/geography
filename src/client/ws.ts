/* eslint-disable indent */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import WebSocket from "ws";
import { Heartbeat, Identify, OPCodes } from "../constants/ws";
import { Client } from "./client";
import { promises as fs } from "fs";
import path from "path";

interface IWSClient {
    init: (token: string) => void;
    discordConnect: () => void;
    customConnect: () => void;
    heartbeat: (ms: number) => void;
    identify: (token: string) => void;
    register: () => void;
}

export declare interface WSClient {
    ws: WebSocket;
    token: string;
    interval: string;
    ackReceived: boolean;
    client: Client;
}

export class WSClient implements IWSClient {
    constructor(client: Client) {
        this.ws = new WebSocket("wss://gateway.discord.gg/?v=8&encoding=json");
        this.client = client;
    }

    async register() {
        const filePath = path.join(__dirname, "../handlers");
        const files = await fs.readdir(filePath);
        for (const file of files) {
            const { default: Event } = await import(
                path.join("../handlers", file)
            );
            const event = new Event();
            this.client.events.set(event.getName(), event);
        }
    }

    async init(token: string) {
        this.register();
        this.token = token;
        this.discordConnect();
    }
    async discordConnect() {
        const gateway = WebSocket.createWebSocketStream(this.ws, {
            encoding: "utf8",
        });

        gateway.on("data", (raw) => {
            const data = JSON.parse(raw);

            switch (data.op) {
                case OPCodes.Hello:
                    (async () => {
                        const { heartbeat_interval } = data.d;
                        this.interval = this.heartbeat(
                            heartbeat_interval
                        ).toString();
                        await this.identify(this.token);
                    })();
                    break;
                case OPCodes.ACK:
                    this.ackReceived = true;
                    break;
                case OPCodes.Dispatch:
                    (async () => {
                        const event = this.client.events.get(
                            data.t.toLowerCase()
                        );

                        if (event) {
                            event.run(this.client, data.d);
                        }
                    })();

                    break;
            }
        });
    }
    async customConnect() {
        console.log("Custom connect");
    }
    async heartbeat(interval: number) {
        return setInterval(() => {
            this.ws.send(JSON.stringify(Heartbeat));
        }, interval);
    }
    async identify(token: string) {
        Identify.d.token = token;
        this.ws.send(JSON.stringify(Identify));
    }
}
