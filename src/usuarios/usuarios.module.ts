// Importa el módulo 'Module' desde el paquete '@nestjs/common'.
import { Module } from '@nestjs/common';

// Importa el controlador 'UsuariosController' desde el archivo './usuarios.controller'.
import { UsuariosController } from './usuarios.controller';

// Importa el servicio 'UsuariosService' desde el archivo './usuarios.service'.
import { UsuariosService } from './usuarios.service';

// Importa el servicio 'PrismaService' desde el archivo 'src/prisma.service'.
import { PrismaService } from 'src/prisma.service';

// Declara un módulo de NestJS llamado 'UsuariosModule'.
@Module({
  // Define los controladores que pertenecen a este módulo.
  controllers: [UsuariosController],

  // Define los proveedores (clases que pueden inyectarse en otras partes de la aplicación) de este módulo.
  providers: [UsuariosService, PrismaService]
})
// Exporta la clase 'UsuariosModule'.
export class UsuariosModule {}
