import { Module } from '@nestjs/common';
import { AddressModule } from './modules/address.module';
import { CostumerModule } from './modules/costumer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
  CostumerModule, AddressModule],
})

export class AppModule {}