import { Injectable } from '@nestjs/common';
import { Proveedores } from './proveedores.entity';
import { v4 } from 'uuid';
import { UpdateProveedorDto } from './dto/proveedor.dto';
@Injectable()
export class ProveedoresService {
    private proveedores: Proveedores[]=[
        {
            idprov: v4(),
            nombre_prov:'Admin',
            correo: 'AD@gmail.com',
            telefono:'0991999999',
            direccion: 'c/String'
        },
    ];
    getAllProveedores(){
        return this.proveedores;
    }
    createProveedor(nombre_prov: string, correo: string, telefono:string, direccion: string){
        const proveedor= {
            idprov: v4(),
            nombre_prov:'Admin',
            correo: 'AD@gmail.com',
            telefono:'0991999999',
            direccion: 'c/String'
        };
        this.proveedores.push(proveedor);
        return this.proveedores;
    }
    getProveedorById(idprov: string): Proveedores{
        return this.proveedores.find(proveedor => proveedor.idprov === idprov)
    }
    updateProveedor(idprov: string, updatedFields: UpdateProveedorDto): Proveedores{
        const proveedor = this.getProveedorById(idprov);
        const newProveedor = Object.assign(proveedor, updatedFields);
        this.proveedores.map(proveedor => proveedor.idprov === idprov ? newProveedor: proveedor);
        return newProveedor;
    }
    deleteProveedores(idprov: string){
        this.proveedores = this.proveedores.filter(proveedor => proveedor.idprov !== idprov);
    }
}