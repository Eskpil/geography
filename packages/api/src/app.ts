import { ApolloServer } from "apollo-server-express";
import "dotenv/config";
import http from "http";

import chalk from "chalk";
import express from "express";
import { buildSchema } from "type-graphql";
import path from "path";
import "reflect-metadata";

(async () => {
    const app = express();
    const server = http.createServer(app);

    const apollo = new ApolloServer({
        schema: await buildSchema({
            validate: false,
            resolvers: [path.join(__dirname, "/modules/**/*.*s")],
        }),
        context: ({ req, res, connection }) => ({
            req,
            res,
            connection,
        }),
        subscriptions: {
            onConnect: (connectionParams, websocket) => {},
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
