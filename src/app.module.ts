import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AddressModule } from './modules/address.module';
import { CustomerModule } from './modules/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/database/ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    CustomerModule,
    AddressModule
  ]
})

export class AppModule { }