import { Ctx, Query, Resolver, Subscription } from "type-graphql";
import { MyContext } from "../../types";

@Resolver()
export class SharedHelloResvoler {
    @Query(() => String)
    async hello(@Ctx() { pubsub }: MyContext) {
        pubsub.publish("HEY", "Nei");
        return "Hello world!";
    }
    @Subscription(() => String, {
        topics: "HEY",
    })
    async Hey(@Ctx() { connection, req }: MyContext) {
        return true;
    }
}
