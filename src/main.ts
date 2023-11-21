import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';

dotenv.config(); // Charge les variables d'environnement depuis le fichier .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
