import { DataSourceOptions } from "typeorm";
require('dotenv').config()

export const config: DataSourceOptions = {
    type: "postgres",
    host: process.env.ORM_HOST,
    port: parseInt(<string>process.env.ORM_PORT),
    username: process.env.ORM_USERNAME,
    password: process.env.ORM_PSSWD,
    database: process.env.ORM_DATABASE,
    synchronize: false,
    logging: false,
    entities: ["dist/entities/*{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    subscribers: [],
}

export default config;