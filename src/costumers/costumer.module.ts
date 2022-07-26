import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Costumer } from './costumer';
import { CostumerController } from './costumer.controller';
import { CostumerService } from './costumer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Costumer])],
    controllers: [CostumerController],
    providers: [CostumerService]
})

export class CostumerModule {}