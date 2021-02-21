import { PubSub } from "apollo-server-express";
import { Request, Response } from "express";
import { ExecutionParams } from "subscriptions-transport-ws";
import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";

export type MyContext = {
    req: Request;
    res: Response;
    connection: ExecutionParams<any>;
    em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
    pubsub: PubSub;
};
