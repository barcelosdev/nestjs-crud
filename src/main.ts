import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import dataSource from './config/database/data-source'
require('dotenv').config()

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  dataSource.initialize()

  const config = new DocumentBuilder()
    .setTitle('Costumer CRUD API')
    .setDescription('A basic CRUD with NestJS framework')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/v1', app, document)

  await app.listen(process.env.PORT || 3000);
}

bootstrap();