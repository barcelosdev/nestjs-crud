import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "../entities/address.entity";
import { AddressService } from "../services/address.service";

@Module({
    imports: [TypeOrmModule.forFeature([Address])],
    providers: [AddressService],
    exports: [AddressService]
})

export class AddressModule {}