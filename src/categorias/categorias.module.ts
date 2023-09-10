// Importa el módulo 'Module' desde el paquete '@nestjs/common'.
import { Module } from '@nestjs/common';

// Importa el controlador 'CategoriasController' desde el archivo './categorias.controller'.
import { CategoriasController } from './categorias.controller';

// Importa el servicio 'CategoriasService' desde el archivo './categorias.service'.
import { CategoriasService } from './categorias.service';

// Declara un módulo de NestJS llamado 'CategoriasModule'.
@Module({
  // Define los controladores que pertenecen a este módulo.
  controllers: [CategoriasController],

  // Define los proveedores (clases que pueden inyectarse en otras partes de la aplicación) de este módulo.
  providers: [CategoriasService],
})
// Exporta la clase 'CategoriasModule'.
export class CategoriasModule {}