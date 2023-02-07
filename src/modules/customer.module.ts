import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Address } from '../entities/address.entity';
import { Customer } from '../entities/customer.entity';
import { CustomerController } from '../controllers/customer.controller';
import { CustomerService } from '../services/customer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Customer, Address])],
    controllers: [CustomerController],
    providers: [CustomerService]
})

export class CustomerModule {}