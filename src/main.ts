import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
//import { CostumerController } from "src/costumers/costumer.controller"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('NestJS CRUD example')
    .setDescription('A basic CRUD with NestJS framework')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/v1', app, document)

  await app.listen(3000);
}

bootstrap();