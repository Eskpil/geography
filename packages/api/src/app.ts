import { ApolloServer, PubSub } from "apollo-server-express";
import "dotenv/config";
import http from "http";

import chalk from "chalk";
import express from "express";
import { buildSchema } from "type-graphql";
import path from "path";
import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import microConfig from "./ormconfig";
import { createConnection } from "typeorm";

(async () => {
    const app = express();
    const server = http.createServer(app);

    const connection = await createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        entities: [path.join(__dirname, "/entities/*.*s")],
    });

    const pubSub = new PubSub();

    const apollo = new ApolloServer({
        schema: await buildSchema({
            validate: false,
            resolvers: [path.join(__dirname, "/modules/**/*.*s")],
            pubSub,
        }),
        context: ({ req, res, connection }) => {
            return {
                req,
                res,
                connection,
                pubsub: pubSub,
            };
        },
        subscriptions: {
            onConnect: (params, ws: any) => {
                return new Promise((res) => {
                    ws.on("message", (raw: any) => {
                        const data = JSON.parse(raw);

                        res({ headers: data.payload.context.fetchOptions });
                    });
                });
            },
        },
    });

    apollo.installSubscriptionHandlers(server);

    apollo.applyMiddleware({
        app,
        cors: false,
    });

    server.listen(4000, () =>
        console.log(chalk.magenta("Server seated on port 4000"))
    );
})();
