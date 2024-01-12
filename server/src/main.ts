import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api')
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    disableErrorMessages: true,
  }));
 
  //Swagger
  const  config = new DocumentBuilder()
        .setTitle('store')
        .setDescription('интернет-магазин гидроциклов')
        .setVersion('1.0.0')
        .addTag('API')
        .build()
        const document = SwaggerModule.createDocument(app, config)
        SwaggerModule.setup('/api/docs', app, document)
  
        await app.listen(3001);
}
bootstrap();



