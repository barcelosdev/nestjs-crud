import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Guitar } from "src/entities/guitar.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Guitar])],
})

export class GuitarModule {}