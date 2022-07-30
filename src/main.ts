import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import connection from '../data-source'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  connection.initialize()

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