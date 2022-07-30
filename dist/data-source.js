"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config = new typeorm_1.DataSource({
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
});
exports.default = config;
//# sourceMappingURL=data-source.js.map