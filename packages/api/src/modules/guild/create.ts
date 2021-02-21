import { Arg, Mutation, Resolver } from "type-graphql";
import { GuildInput, GuildResponse } from "../../graphql/Guild";

@Resolver()
export class GuildCreateResolver {
    @Mutation(() => GuildResponse)
    async createGuild(@Arg("options") options: GuildInput) {}
}
