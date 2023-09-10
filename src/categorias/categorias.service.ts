import { Injectable } from '@nestjs/common';
import { Categoria } from './categoria.entity';
import { v4 } from 'uuid';
import { UpdateCategoriaDto } from './dto/categoria.dto';
@Injectable()
export class CategoriasService {
    private categorias: Categoria[]=[
        {
            id: '1',
            nombre:'Admin',
            imagen:'1111111',
        },
    ];
    getAllCategorias(){
        return this.categorias;
    }
    createCategoria(nombre: string, imagen: string){
        const categoria= {
            id: v4(),
            nombre:'Admin',
            imagen: 'SA',
        };
        this.categorias.push(categoria);
        return categoria;
    }
    getCategoriaById(id: string): Categoria{
        return this.categorias.find(categoria => categoria.id === id)
    }
    updateCategorias(id: string, updatedFields: UpdateCategoriaDto): Categoria{
        const categoria = this.getCategoriaById(id);
        const newCategoria = Object.assign(categoria, updatedFields);
        this.categorias.map(categoria => categoria.id === id ? newCategoria: categoria);
        return newCategoria;
    }
    deleteCategorias(id: string){
        this.categorias = this.categorias.filter(categoria => categoria.id !== id);
    }
}