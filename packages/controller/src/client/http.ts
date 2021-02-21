/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

export declare interface HttpClient {
    _token: string;
    endpoint: string;
    headers: Headers;
}

interface Headers {
    authorazation: string;
}

export class HttpClient {
    constructor() {
        this._token = "";
        this.endpoint = "https://discord.com/api";
    }

    async members(guildId: string) {
        const response = await axios({
            url: `${this.endpoint}/guilds/${guildId}/members`,
            method: "GET",
            headers: {
                Authorization: `Bot ${this._token}`,
            },
        });
        return response.data;
    }

    async guild(id: string) {
        const response = await axios({
            url: `${this.endpoint}/guilds/${id}?with_counts=true`,
            method: "GET",
            headers: {
                Authorization: `Bot ${this._token}`,
            },
        });
        return response.data;
    }

    async channels(guildId: string) {
        const response = await axios({
            url: `${this.endpoint}/guilds/${guildId}/channels`,
            method: "GET",
            headers: {
                Authorization: `Bot ${this._token}`,
            },
        });
        return response.data;
    }

    async emojis(guildId: string) {
        const response = await axios({
            url: `${this.endpoint}/guilds/${guildId}/emojis`,
            method: "GET",
            headers: {
                Authorization: `Bot ${this._token}`,
            },
        });
        return response.data;
    }

    set token(token: string) {
        this._token = token;
        this.headers = {
            authorazation: `Bot ${token}`,
        };
    }
}
