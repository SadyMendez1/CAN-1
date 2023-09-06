import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { v4 } from 'uuid'
import { UpdateUsuarioDto } from './dto/usuario.dto';
@Injectable()
export class UsuariosService {
    private usuarios: Usuario[]=[
        {
            id: '1',
            nombre:'Admin',
            ci: 1111111,            
            apellido: 'Super',
            correo: 'AD@gmail.com',
            telefono:'0991999999',
            direccion: 'c/String',           
            contraseña: '123456',
            rol: 'SA'
        },
    ];
    getAllUsuarios(){
        return this.usuarios;
    }
    createUsuario(nombre: string, ci: number, apellido: string, correo: string, telefono:string, direccion: string, contraseña: string, rol: string){
        const usuario= {
            id: v4(),
            nombre:'Admin',
            ci: 1111111,            
            apellido: 'Super',
            correo: 'AD@gmail.com',
            telefono:'0991999999',
            direccion: 'c/String',           
            contraseña: '123456',
            rol: 'SA'
        };
        this.usuarios.push(usuario);
        return usuario;
    }
    getUsuarioById(id: string): Usuario{
        return this.usuarios.find(usuario => usuario.id === id)
    }
    updateUsuarios(id: string, updatedFields: UpdateUsuarioDto): Usuario{
        const usuario = this.getUsuarioById(id);
        const newUsuario = Object.assign(usuario, updatedFields);
        this.usuarios.map(usuario => usuario.id === id ? newUsuario: usuario);
        return newUsuario;
    }
    deleteUsuarios(id: string){
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    }
}
