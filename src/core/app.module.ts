import { Module } from '@nestjs/common';
import { CostumerModule } from 'src/costumers/costumer.module';
import { DataSourceModule } from './data-source';

@Module({
  imports: [CostumerModule, DataSourceModule],
})

export class AppModule {}