import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [path.join(__dirname, "/entities/*.*s")],
    dbName: "geography",
    type: "postgresql",
    strict: false,
    debug: true,
} as Parameters<typeof MikroORM.init>[0];
