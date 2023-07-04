import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'
import * as cors from 'cors';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

   // Configuração do Swagger
   const config = new DocumentBuilder()
   .setTitle('API livrou')
   .setDescription('Api da Plataforma Livrou')
   .setVersion('1.0')
   .addBearerAuth()
   .build();

 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);

  app.use(cors())
  await app.listen(3000);
}
bootstrap();