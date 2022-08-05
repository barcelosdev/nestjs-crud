import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Address } from '../entities/address.entity';
import { Costumer } from '../entities/costumer.entity';
import { CostumerController } from '../controllers/costumer.controller';
import { CostumerService } from '../services/costumer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Costumer, Address])],
    controllers: [CostumerController],
    providers: [CostumerService]
})

export class CostumerModule {}