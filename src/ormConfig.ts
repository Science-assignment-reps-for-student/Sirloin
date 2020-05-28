import { ConnectionOptions } from "typeorm"

const connectionOptions: ConnectionOptions = {
    type: "mysql",
    database: "board",
    synchronize: true,
    logging: true,
    entities: ["entities/*.*"],
    host: process.env.DB_ENDPOINT || "localhost",
    port: 5432,
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || ""
}

export default connectionOptions