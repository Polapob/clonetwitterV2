import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { raw } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://locahost:3000',
    credentials: true,
  });
  app.use(cookieParser());
  app.use(raw({ type: 'application/json˝' }));
  await app.listen(4000);
}
bootstrap();
