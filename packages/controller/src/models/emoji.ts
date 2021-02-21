import { throws } from "assert";
import { User } from "./user";

interface Options {
    id: string;
    name: string;
    roles: string[];
    user: User;
    require_colons: boolean;
    managed: boolean;
    animated: boolean;
}

export class Emoji {
    id: string;
    name: string;
    roles: string[];
    user: User;
    require_colons: boolean;
    managed: boolean;
    animated: boolean;

    constructor(options: Options) {
        this.id = options.id;
        this.name = options.name;
        this.roles = options.roles;
        this.user = options.user;
        this.require_colons = options.require_colons;
        this.managed = options.managed;
        this.animated = options.animated;
    }
}
