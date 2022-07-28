import { Module } from '@nestjs/common';
import { AddressModule } from './modules/address.module';
import { CostumerModule } from './modules/costumer.module';
import { DataSourceModule } from './core/config/data-source';

@Module({
  imports: [CostumerModule, AddressModule, DataSourceModule],
})

export class AppModule {}