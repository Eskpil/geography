interface Options {
    verified?: string;
    username: string;
    mfa_enabled?: boolean;
    id: string;
    flags?: string;
    email?: string;
    discriminator: string;
    bot: boolean;
    avatar: string;
    session: string;
}

export class User {
    verified?: string;
    username: string;
    mfa_enabled?: boolean;
    id: string;
    flags?: string;
    email?: string;
    discriminator: string;
    bot: boolean;
    icon: string;
    session: string;

    constructor(options: Options) {
        this.verified = options.verified;
        this.username = options.username;
        this.mfa_enabled = options.mfa_enabled;
        this.id = options.id;
        this.flags = options.flags;
        this.email = options.email;
        this.discriminator = options.discriminator;
        this.bot = options.bot;
        this.icon = options.avatar;
        this.session = options.session;
    }

    // async avatar() {
    //     return `https://cdn.discordapp.com/${this.id}/${this.icon}.png`;
    // }
}
