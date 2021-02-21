import { Field, InputType, ObjectType } from "type-graphql";
import { Guild } from "../entities/Guild";
import { FieldError } from "./FieldError";

@ObjectType()
export class GuildResponse {
    @Field(() => [FieldError], { nullable: true })
    errors: FieldError[];

    @Field(() => Guild, { nullable: true })
    guild: Guild;
}

@InputType()
export class GuildInput {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    ownerId: string;

    @Field()
    image: string;

    @Field()
    session: string;
}
