// Importa los decoradores y clases necesarios desde el módulo '@nestjs/common'
import { Controller, Req, Res, Get } from '@nestjs/common';

// Importa el servicio 'UsuariosService' y los DTO (Data Transfer Objects) relacionados desde el archivo correspondiente
import { UsuariosService } from './usuarios.service';

import { Request, Response } from 'express';

import { CreateUsuarioDto, UpdateUsuarioDto } from './dto/usuario.dto';

// Define un controlador llamado 'UsuariosController' con una ruta base '/usuarios'
@Controller('usuarios')
export class UsuariosController {
       // Constructor que recibe una instancia de 'UsuariosService' como parámetro
    constructor(private readonly usuarioService: UsuariosService){ }

    // Decorador @Get() para crear una ruta HTTP GET en '/usuarios'
    @Get()

    // Método 'getAllUsuarios' que será ejecutado cuando se haga una solicitud GET a la ruta '/usuarios'
    async getAllUsuarios(@Req() request: Request, @Res() response: Response):Promise<any>{
        try {
            const result = await this.usuarioService.getAllUsuarios();
            return response.status(200).json({
                status: 'Correcto',
                message: 'Datos correctamente recuperado',
                result: result
            })
        } catch (error) {
            return response.status(500).json({
                status: 'Correcto',
                message: 'Error de Servidor'
            })            
        }
    }
}