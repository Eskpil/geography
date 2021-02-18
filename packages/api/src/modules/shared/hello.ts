import { Query, Resolver } from "type-graphql";

@Resolver()
export class SharedHelloResvoler {
    @Query(() => String)
    async hello() {
        return "Hello world!";
    }
}
