require('elastic-apm-node').start({
  serviceName: 'test',
  secretToken: 'x',
  serverUrl: 'x',
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
