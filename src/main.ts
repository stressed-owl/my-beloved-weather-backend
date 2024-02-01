import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3012;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  app
    .listen(PORT)
    .then(() => {
      console.log(`The server is running on ${PORT}`);
    })
    .catch((error) => console.log(error));
}
bootstrap();
