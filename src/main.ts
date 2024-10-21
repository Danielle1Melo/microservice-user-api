import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { addSwagger } from './app/config/swagger.config';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  
  const PORT = configService.get<number>('PORT');



  addSwagger(app)
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(PORT, () => 
    console.warn(`Server running on port ${PORT}`)
  );
}
bootstrap();
