// Importa los decoradores y clases necesarios desde el módulo '@nestjs/common'
import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

// Importa el servicio 'ProductosService' y los DTO (Data Transfer Objects) relacionados desde el archivo correspondiente
import { ProductosService } from './productos.service';
import { CreateProductoDto, UpdateProductoDto } from './dto/productos.dto';

// Define un controlador llamado 'ProductosController' con una ruta base '/productos'
@Controller('productos')
export class ProductosController {

    // Constructor que recibe una instancia de 'ProductosService' como parámetro
    constructor(private productosService: ProductosService) { }

    // Decorador @Get() para crear una ruta HTTP GET en '/productos'
    @Get()
    // Método 'getAllProductos' que será ejecutado cuando se haga una solicitud GET a la ruta '/productos'
    getAllProductos() {
        // Llama al método 'getAllProductos' del servicio 'ProductosService' y devuelve el resultado
        return this.productosService.getAllProductos();
    }

    // Decorador @Post() para crear una ruta HTTP POST en '/productos'
    @Post()
    // Método 'createProducto' que será ejecutado cuando se haga una solicitud POST a la ruta '/productos'
    createProducto(@Body() newProducto: CreateProductoDto) {
        // Llama al método 'createProducto' del servicio 'ProductosService' pasando el objeto 'newProducto' como argumento
        return this.productosService.createProducto(
            newProducto.nombre,
            newProducto.descripcion,
            newProducto.precio,
            newProducto.stock,
            newProducto.catId,
            newProducto.proveId,
        );
    }
    
    // Decorador @Delete() para crear una ruta HTTP DELETE en '/productos/:id'
    @Delete(':id')
    // Método 'deleteProducto' que será ejecutado cuando se haga una solicitud DELETE a una ruta como '/productos/123', donde '123' es el ID proporcionado en la URL
    deleteProducto(@Param('id') id: string){
        // Llama al método 'deleteProductos' del servicio 'ProductosService' pasando el 'idprod' como argumento
        this.productosService.deleteProductos(id);
    }

    // Decorador @Patch() para crear una ruta HTTP PATCH en '/usuarios/:id'
    @Patch(':id')
    // Método 'updateUsuario' que será ejecutado cuando se haga una solicitud PATCH a una ruta como '/usuarios/123', donde '123' es el ID proporcionado en la URL
    updateProducto(@Param('id') id: string, @Body() updatedFields: UpdateProductoDto){
        // Llama al método 'updateProductos' del servicio 'ProductosService' pasando el 'idprod' y 'updatedFields' como argumentos
        return this.productosService.updateProductos(id, updatedFields);
    }
}