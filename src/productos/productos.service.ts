import { Injectable } from '@nestjs/common';
import { Producto } from './productos.entity';
import { v4 } from 'uuid';
import { UpdateProductoDto } from './dto/productos.dto';

@Injectable()
export class ProductosService {

    private productos: Producto[]=[
        {
            idprod: '1',
            descripcion:'canastas',
            proveedor: 'c12',
            precio: '1000',
            stock: '20',
            imagen: 'img/jpeg',
        },
    ];
    getAllProductos(){
        return this.productos;
    }
    createProducto(descripcion: string, proveedor: string, precio: string, stock: string, imagen:string){
        const producto= {
            idprod: v4(),
            descripcion:'canastas',
            proveedor: 'c12',
            precio: '1000',
            stock: '20',
            imagen: 'img/jpeg',
        };
        this.productos.push(producto);
        return producto;
    }
    getProductoById(idprod: string): Producto{
        return this.productos.find(producto => producto.idprod === idprod)
    }
    updateProductos(idprod: string, updatedFields: UpdateProductoDto): Producto{
        const producto = this.getProductoById(idprod);
        const newProducto = Object.assign(producto, updatedFields);
        this.productos.map(producto => producto.idprod === idprod ? newProducto: producto);
        return newProducto;
    }
    deleteProductos(idprod: string){
        this.productos = this.productos.filter(producto => producto.idprod !== idprod);
    }
}