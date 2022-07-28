import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Address } from "../../entities/address"
import { DataSource } from "typeorm"
import { Costumer } from "../../entities/costumer"

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "Mat_235689",
            database: "nestjs_crud_db",
            synchronize: true,
            logging: false,
            entities: [Costumer, Address],
            migrations: [],
            subscribers: [],
        }),
    ],
})

export class DataSourceModule { 
    constructor(private dataSource: DataSource){}
}