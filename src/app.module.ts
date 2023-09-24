// Importa el módulo 'Module' desde el paquete '@nestjs/common'.
import { Module } from '@nestjs/common';

// Importa los módulos y controladores desde sus archivos correspondientes.
import { AuthModule } from './authentication/auth.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CategoriasController } from './categorias/categorias.controller';
import { ProductosController } from './productos/productos.controller';
import { ProveedoresController } from './proveedores/proveedores.controller';
import { UsuariosController } from './usuarios/usuarios.controller';

// Declara un módulo de NestJS llamado 'AppModule'.
@Module({
  // Indica los módulos que deben importarse en este módulo.
  imports: [AuthModule, CategoriasModule, ProductosModule, ProveedoresModule, UsuariosModule],

  // Define los controladores que pertenecen a este módulo.
  controllers: [CategoriasController, ProductosController, ProveedoresController, UsuariosController],

  // Define los proveedores (clases que pueden inyectarse en otras partes de la aplicación) de este módulo.
  providers: [],
})
// Exporta la clase 'AppModule' como el módulo principal de la aplicación.
export class AppModule {}