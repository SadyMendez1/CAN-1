// Importa el módulo 'Module' desde el paquete '@nestjs/common'.
import { Module } from '@nestjs/common';

// Importa el controlador 'ProveedoresController' desde el archivo './proveedores.controller'.
import { ProveedoresController } from './proveedores.controller';

// Importa el servicio 'ProveedoresService' desde el archivo './proveedores.service'.
import { ProveedoresService } from './proveedores.service';

// Declara un módulo de NestJS llamado 'ProveedoresModule'.
@Module({
  // Define los controladores que pertenecen a este módulo.
  controllers: [ProveedoresController],

  // Define los proveedores (clases que pueden inyectarse en otras partes de la aplicación) de este módulo.
  providers: [ProveedoresService],
})
// Exporta la clase 'ProveedoresModule'.
export class ProveedoresModule {}