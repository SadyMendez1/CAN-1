// Importa los decoradores y clases necesarios desde el módulo '@nestjs/common'
import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

// Importa el servicio 'UsuariosService' y los DTO (Data Transfer Objects) relacionados desde el archivo correspondiente
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto, UpdateCategoriaDto } from './dto/categoria.dto';

// Define un controlador llamado 'CategoriasCotroller' con una ruta base '/categorias'
@Controller('categorias')
export class CategoriasController {

    // Constructor que recibe una instancia de 'CategoriasService' como parámetro
    constructor(private categoriasService: CategoriasService) { }

    // Decorador @Get() para crear una ruta HTTP GET en '/categorias'
    @Get()
    // Método 'getAllCategorias' que será ejecutado cuando se haga una solicitud GET a la ruta '/categorias'
    getAllCategorias() {
        // Llama al método 'getAllCategorias' del servicio 'CategoriasService' y devuelve el resultado
        return this.categoriasService.getAllCategorias();
    }

    // Decorador @Post() para crear una ruta HTTP POST en '/categorias'
    @Post()
    // Método 'createCategoria' que será ejecutado cuando se haga una solicitud POST a la ruta '/categorias'
    createCategoria(@Body() newCategoria: CreateCategoriaDto) {
        // Llama al método 'createCategoria' del servicio 'CategoriasService' pasando el objeto 'newCategoria' como argumento
        return this.categoriasService.createCategoria(
            newCategoria.descripcion
        );
    }
    
    // Decorador @Delete() para crear una ruta HTTP DELETE en '/categorias/:id'
    @Delete(':id')
    // Método 'deleteCategoria' que será ejecutado cuando se haga una solicitud DELETE a una ruta como '/categorias/123', donde '123' es el ID proporcionado en la URL
    deleteCategoria(@Param('id') id: string){
        // Llama al método 'deleteCategorias' del servicio 'CategoriasService' pasando el 'id' como argumento
        this.categoriasService.deleteCategorias(id);
    }

    // Decorador @Patch() para crear una ruta HTTP PATCH en '/categorias/:id'
    @Patch(':id')
    // Método 'updateCategoria' que será ejecutado cuando se haga una solicitud PATCH a una ruta como '/usuarios/123', donde '123' es el ID proporcionado en la URL
    updateCategoria(@Param('id') id: string, @Body() updatedFields: UpdateCategoriaDto){
        // Llama al método 'updateCategorias' del servicio 'CategoriasService' pasando el 'id' y 'updatedFields' como argumentos
        return this.categoriasService.updateCategorias(id, updatedFields);
    }
}