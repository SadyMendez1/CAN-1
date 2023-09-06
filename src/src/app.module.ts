// Importa el módulo 'Module' desde el paquete '@nestjs/common'.
import { Module } from '@nestjs/common';

// Importa el módulo 'UsuariosModule' desde el archivo './usuarios/usuarios.module'.
import { UsuariosModule } from './usuarios/usuarios.module';

// Declara un módulo de NestJS llamado 'AppModule'.
@Module({
  // Indica los módulos que deben importarse en este módulo.
  imports: [UsuariosModule],

  // Define los controladores que pertenecen a este módulo.
  controllers: [],

  // Define los proveedores (clases que pueden inyectarse en otras partes de la aplicación) de este módulo.
  providers: [],
})
// Exporta la clase 'AppModule' como el módulo principal de la aplicación.
export class AppModule {}
