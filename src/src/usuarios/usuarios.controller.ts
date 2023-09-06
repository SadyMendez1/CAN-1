// Importa los decoradores y clases necesarios desde el módulo '@nestjs/common'
import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

// Importa el servicio 'UsuariosService' y los DTO (Data Transfer Objects) relacionados desde el archivo correspondiente
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto, UpdateUsuarioDto } from './dto/usuario.dto';

// Define un controlador llamado 'UsuariosController' con una ruta base '/usuarios'
@Controller('usuarios')
export class UsuariosController {

    // Constructor que recibe una instancia de 'UsuariosService' como parámetro
    constructor(private usuariosService: UsuariosService) { }

    // Decorador @Get() para crear una ruta HTTP GET en '/usuarios'
    @Get()
    // Método 'getAllUsuarios' que será ejecutado cuando se haga una solicitud GET a la ruta '/usuarios'
    getAllUsuarios() {
        // Llama al método 'getAllUsuarios' del servicio 'UsuariosService' y devuelve el resultado
        return this.usuariosService.getAllUsuarios();
    }

    // Decorador @Post() para crear una ruta HTTP POST en '/usuarios'
    @Post()
    // Método 'createUsuario' que será ejecutado cuando se haga una solicitud POST a la ruta '/usuarios'
    createUsuario(@Body() newUsuario: CreateUsuarioDto) {
        // Llama al método 'createUsuario' del servicio 'UsuariosService' pasando el objeto 'newUsuario' como argumento
        return this.usuariosService.createUsuario(
            newUsuario.nombre,
            newUsuario.ci,
            newUsuario.apellido,
            newUsuario.correo,
            newUsuario.telefono,
            newUsuario.direccion,
            newUsuario.contraseña,
            newUsuario.rol
        );
    }
    
    // Decorador @Delete() para crear una ruta HTTP DELETE en '/usuarios/:id'
    @Delete(':id')
    // Método 'deleteUsuario' que será ejecutado cuando se haga una solicitud DELETE a una ruta como '/usuarios/123', donde '123' es el ID proporcionado en la URL
    deleteUsuario(@Param('id') id: string){
        // Llama al método 'deleteUsuarios' del servicio 'UsuariosService' pasando el 'id' como argumento
        this.usuariosService.deleteUsuarios(id);
    }

    // Decorador @Patch() para crear una ruta HTTP PATCH en '/usuarios/:id'
    @Patch(':id')
    // Método 'updateUsuario' que será ejecutado cuando se haga una solicitud PATCH a una ruta como '/usuarios/123', donde '123' es el ID proporcionado en la URL
    updateUsuario(@Param('id') id: string, @Body() updatedFields: UpdateUsuarioDto){
        // Llama al método 'updateUsuarios' del servicio 'UsuariosService' pasando el 'id' y 'updatedFields' como argumentos
        return this.usuariosService.updateUsuarios(id, updatedFields);
    }
}
