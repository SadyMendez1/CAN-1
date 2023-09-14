import { Injectable } from '@nestjs/common';
import { Producto } from './productos.entity';
import { v4 } from 'uuid';
import { UpdateProductoDto } from './dto/productos.dto';

@Injectable()
export class ProductosService {

    private productos: Producto[]=[
        {
            id: '1',
            nombre: "canasta",
            descripcion:'canastas',
            precio: '1000',
            stock: '20',
            catId: 'abc',
            proveId: 'def'
        },
    ];
    getAllProductos(){
        return this.productos;
    }
    createProducto(nombre: string, descripcion: string, precio: string, stock: string, catId:string, proveId:string){
        const producto= {
            id: v4(),
            nombre: "canasta",
            descripcion:'canastas',
            precio: '1000',
            stock: '20',
            catId: 'abc',
            proveId: 'def'
        };
        this.productos.push(producto);
        return producto;
    }
    getProductoById(id: string): Producto{
        return this.productos.find(producto => producto.id === id)
    }
    updateProductos(id: string, updatedFields: UpdateProductoDto): Producto{
        const producto = this.getProductoById(id);
        const newProducto = Object.assign(producto, updatedFields);
        this.productos.map(producto => producto.id === id ? newProducto: producto);
        return newProducto;
    }
    deleteProductos(id: string){
        this.productos = this.productos.filter(producto => producto.id !== id);
    }
}