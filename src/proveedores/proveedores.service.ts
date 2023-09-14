import { Injectable } from '@nestjs/common';
import { Proveedores } from './proveedores.entity';
import { v4 } from 'uuid';
import { UpdateProveedorDto } from './dto/proveedor.dto';
@Injectable()
export class ProveedoresService {
    private proveedores: Proveedores[]=[
        {
            id: v4(),
            nombre:'Admin',
            correo: 'AD@gmail.com',
            telefono:991999999,
            direccion: 'c/String'
        },
    ];
    getAllProveedores(){
        return this.proveedores;
    }
    createProveedor(nombre: string, correo: string, telefono:number, direccion: string){
        const proveedor= {
            id: v4(),
            nombre:'Admin',
            correo: 'AD@gmail.com',
            telefono: 991999999,
            direccion: 'c/String'
        };
        this.proveedores.push(proveedor);
        return this.proveedores;
    }
    getProveedorById(id: string): Proveedores{
        return this.proveedores.find(proveedor => proveedor.id === id)
    }
    updateProveedor(id: string, updatedFields: UpdateProveedorDto): Proveedores{
        const proveedor = this.getProveedorById(id);
        const newProveedor = Object.assign(proveedor, updatedFields);
        this.proveedores.map(proveedor => proveedor.id === id ? newProveedor: proveedor);
        return newProveedor;
    }
    deleteProveedores(id: string){
        this.proveedores = this.proveedores.filter(proveedor => proveedor.id !== id);
    }
}