import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CustomerModule } from "src/modules/customer.module";
import { DataSource } from "typeorm";
import { AddressModule } from "src/modules/address.module";
import config from "./database.config";

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule, CustomerModule, AddressModule],
    inject: [ConfigService],
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return config
    },
    dataSourceFactory: async (options) => {
        return await new DataSource(options).initialize()
    }
}