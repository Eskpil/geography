import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity({ name: "guilds" })
export class Guild extends BaseEntity {
    @Field(() => ID!)
    @PrimaryColumn()
    id: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    prefix: string;

    @Field()
    @Column({ name: "owner_id" })
    ownerId: string;

    @Field()
    @Column({ name: "plan" })
    plan: number;

    @Field()
    @Column()
    image: string;

    @Field()
    @Column({ type: "text" })
    session: string;
}
