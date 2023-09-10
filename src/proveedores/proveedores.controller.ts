// Importa los decoradores y clases necesarios desde el módulo '@nestjs/common'
import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

// Importa el servicio 'ProveedoresService' y los DTO (Data Transfer Objects) relacionados desde el archivo correspondiente
import { ProveedoresService } from './proveedores.service';
import { CreateProveedorDto, UpdateProveedorDto } from './dto/proveedor.dto';

// Define un controlador llamado 'ProveedoresController' con una ruta base '/proveedores'
@Controller('proveedores')
export class ProveedoresController {

    // Constructor que recibe una instancia de 'ProveedoresService' como parámetro
    constructor(private proveedoresService: ProveedoresService) { }

    // Decorador @Get() para crear una ruta HTTP GET en '/proveedores'
    @Get()
    // Método 'getAllProveedores' que será ejecutado cuando se haga una solicitud GET a la ruta '/proveedores'
    getAllProveedores() {
        // Llama al método 'getAllProveedores' del servicio 'ProveedoresService' y devuelve el resultado
        return this.proveedoresService.getAllProveedores();
    }

    // Decorador @Post() para crear una ruta HTTP POST en '/proveedores'
    @Post()
    // Método 'createProveedor' que será ejecutado cuando se haga una solicitud POST a la ruta '/proveedores'
    createProveedor(@Body() newProveedor: CreateProveedorDto) {
        // Llama al método 'createProveedor' del servicio 'ProveedoresService' pasando el objeto 'newProveedor' como argumento
        return this.proveedoresService.createProveedor(
            newProveedor.nombre_prov,
            newProveedor.correo,
            newProveedor.telefono,
            newProveedor.direccion
        );
    }
    
    // Decorador @Delete() para crear una ruta HTTP DELETE en '/proveedores/:idprov'
    @Delete(':idprov')
    // Método 'deleteProveedor' que será ejecutado cuando se haga una solicitud DELETE a una ruta como '/proveedores/123', donde '123' es el ID proporcionado en la URL
    deleteProveedor(@Param('idprov') idprov: string){
        // Llama al método 'deleteProveedores' del servicio 'proveedoresService' pasando el 'idprov' como argumento
        this.proveedoresService.deleteProveedores(idprov);
    }

    // Decorador @Patch() para crear una ruta HTTP PATCH en '/proveedores/:idprov'
    @Patch(':idprov')
    // Método 'updateProveedor' que será ejecutado cuando se haga una solicitud PATCH a una ruta como '/proveedores/123', donde '123' es el ID proporcionado en la URL
    updateProveedor(@Param('idprov') idprov: string, @Body() updatedFields: UpdateProveedorDto){
        // Llama al método 'updateProveedor' del servicio 'proveedoresService' pasando el 'id' y 'updatedFields' como argumentos
        return this.proveedoresService.updateProveedor(idprov, updatedFields);
    }
}