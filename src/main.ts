// Importa la clase 'NestFactory' desde el paquete '@nestjs/core'.
import { NestFactory } from '@nestjs/core';

// Importa el módulo 'AppModule' desde el archivo './app.module'.
import { AppModule } from './app.module';

// Define una función asincrónica llamada 'bootstrap'.
async function bootstrap() {
  // Crea una instancia de la aplicación NestJS utilizando el módulo 'AppModule'.
  const app = await NestFactory.create(AppModule);

  // Escucha en el puerto 3000 para manejar las solicitudes entrantes.
  await app.listen(3000);
}

// Llama a la función 'bootstrap' para iniciar la aplicación.
bootstrap();
