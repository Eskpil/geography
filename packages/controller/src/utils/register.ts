import { Client } from "../client/client";
import { Channel } from "../constants/channel";
import { BaseChannel } from "../models/channels/BaseChannel";
import { CategoryChannel } from "../models/channels/category";
import { TextChannel } from "../models/channels/text";
import { VoiceChannel } from "../models/channels/voice";
import { Emoji } from "../models/emoji";
import { Guild } from "../models/guild";
import { Member } from "../models/member";
import { User } from "../models/user";

export declare interface Register {
    client: Client;
}

export class Register {
    constructor(client: Client) {
        this.client = client;
    }
    async guilds(
        guilds: {
            unavaliable: boolean;
            id: string;
        }[]
    ) {
        return guilds.map(async (g) => {
            const discordGuild = await this.client.http.guild(g.id);
            const channels = await this.channels(g.id);
            const members = await this.members(g.id);
            const emojis = await this.emojis(g.id);

            const guild = new Guild({
                ...discordGuild,
                ownerId: discordGuild.owner_id,
                channels,
                members,
                emojis,
            });

            this.client.guilds.set(guild.id, guild);
            return guild;
        });
    }

    async channels(id?: string, myChannels?: any) {
        const mappedChannels = new Map<string, BaseChannel>();
        if (id) {
            const channels: BaseChannel[] = await this.client.http.channels(
                id!
            );
            channels.map((c) => {
                switch (c.type) {
                    case Channel.GUILD_TEXT:
                        const textchannel = new TextChannel({
                            ...(c as any),
                        });
                        mappedChannels.set(c.id, textchannel);
                        this.client.channels.set(c.id, textchannel);
                        break;
                    case Channel.GUILD_VOICE:
                        const voicechannel = new VoiceChannel({
                            ...(c as any),
                        });
                        mappedChannels.set(c.id, voicechannel);
                        this.client.channels.set(c.id, voicechannel);
                        break;
                    case Channel.GUILD_CATEGORY:
                        const categorychannel = new CategoryChannel({
                            ...(c as any),
                        });
                        mappedChannels.set(c.id, categorychannel);
                        this.client.channels.set(c.id, categorychannel);
                        break;
                }
            });
        }
        if (myChannels) {
            myChannels.map((c: any) => {
                switch (c.type) {
                    case Channel.GUILD_TEXT:
                        const textchannel = new TextChannel({
                            ...(c as any),
                        });
                        mappedChannels.set(c.id, textchannel);
                        this.client.channels.set(c.id, textchannel);
                        break;
                    case Channel.GUILD_VOICE:
                        const voicechannel = new VoiceChannel({
                            ...(c as any),
                        });
                        mappedChannels.set(c.id, voicechannel);
                        this.client.channels.set(c.id, voicechannel);
                        break;
                    case Channel.GUILD_CATEGORY:
                        const categorychannel = new CategoryChannel({
                            ...(c as any),
                        });
                        mappedChannels.set(c.id, categorychannel);
                        this.client.channels.set(c.id, categorychannel);
                        break;
                }
            });
        }
        return mappedChannels;
    }

    async members(id?: string, myMembers: any) {
        const mappedMembers = new Map<string, Member>();
        if (id) {
            const members: Member[] = await this.client.http.members(id!);
            members.map((m) => {
                const user = new User({
                    ...m.user,
                    avatar: m.user.icon,
                });

                this.client.users.set(user.id, user);

                mappedMembers.set(
                    m.user.id,
                    new Member({
                        ...m,
                        user,
                    })
                );
            });
        }
        return mappedMembers;
    }

    async emojis(id: string) {
        const emojis: Emoji[] = await this.client.http.emojis(id);
        const mappedEmojis = new Map<string, Emoji>();
        emojis.map((e) => {
            mappedEmojis.set(e.id, e);
        });
        return mappedEmojis;
    }
}
