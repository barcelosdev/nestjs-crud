import { DataSource } from "typeorm"

const config = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Mat_235689",
    database: "nestjs_crud_db",
    synchronize: false,
    logging: false,
    entities: ['dist/src/entities/*{.ts,.js}'],
    migrations: ['dist/src/migration/*{.ts,.js}'],
    subscribers: [],
})

export default config