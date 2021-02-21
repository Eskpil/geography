import { User } from "./user";

interface Options {
    nick?: string;
    joined_at: string;
    user: User;
    mute: boolean;
    deaf: boolean;
}

export class Member {
    nick?: string;
    joined_at: string;
    user: User;
    mute: boolean;
    deaf: boolean;

    constructor(options: Options) {
        this.nick = options.nick;
        this.joined_at = options.joined_at;
        this.user = options.user;
        this.mute = options.mute;
        this.deaf = options.deaf;
    }
}
