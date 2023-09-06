// Define una clase llamada 'CreateUsuarioDto'
export class CreateUsuarioDto {
    // Declaración de propiedades de la clase 'CreateUsuarioDto'

    // Propiedad 'nombre' de tipo string, que representa el nombre del usuario que se va a crear
    nombre: string;

    // Propiedad 'ci' de tipo number, que representa el número de identificación del usuario que se va a crear
    ci: number;

    // Propiedad 'apellido' de tipo string, que representa el apellido del usuario que se va a crear
    apellido: string;

    // Propiedad 'correo' de tipo string, que representa el correo electrónico del usuario que se va a crear
    correo: string;

    // Propiedad 'telefono' de tipo string, que representa el número de teléfono del usuario que se va a crear
    telefono: string;

    // Propiedad 'direccion' de tipo string, que representa la dirección del usuario que se va a crear
    direccion: string;

    // Propiedad 'usuario' de tipo string, que representa el nombre de usuario del usuario que se va a crear
    usuario: string;

    // Propiedad 'contraseña' de tipo string, que representa la contraseña del usuario que se va a crear
    contraseña: string;

    // Propiedad 'rol' de tipo string, que representa el rol del usuario que se va a crear (por ejemplo, "administrador" o "usuario")
    rol: string;
}
// Define una clase llamada 'UpdateUsuarioDto'
export class UpdateUsuarioDto {
    // Declaración de propiedades de la clase 'UpdateUsuarioDto'

    // Propiedad 'nombre' opcional de tipo string, que representa el nuevo nombre que se puede actualizar en el usuario
    nombre?: string;

    // Propiedad 'ci' opcional de tipo number, que representa el nuevo número de identificación que se puede actualizar en el usuario
    ci?: number;

    // Propiedad 'apellido' opcional de tipo string, que representa el nuevo apellido que se puede actualizar en el usuario
    apellido?: string;

    // Propiedad 'correo' opcional de tipo string, que representa el nuevo correo electrónico que se puede actualizar en el usuario
    correo?: string;

    // Propiedad 'telefono' opcional de tipo string, que representa el nuevo número de teléfono que se puede actualizar en el usuario
    telefono?: string;

    // Propiedad 'direccion' opcional de tipo string, que representa la nueva dirección que se puede actualizar en el usuario
    direccion?: string;

    // Propiedad 'usuario' opcional de tipo string, que representa el nuevo nombre de usuario que se puede actualizar en el usuario
    usuario?: string;

    // Propiedad 'contraseña' opcional de tipo string, que representa la nueva contraseña que se puede actualizar en el usuario
    contraseña?: string;

    // Propiedad 'rol' opcional de tipo string, que representa el nuevo rol que se puede actualizar en el usuario
    rol?: string;
}
/**
 * En resumen, estos DTOs (Data Transfer Objects) definen la estructura de datos que se 
 * utiliza para transferir información entre el cliente y el servidor al crear o actualizar 
 * objetos Usuario. Los campos en el CreateUsuarioDto son obligatorios para crear un nuevo usuario, 
 * mientras que los campos en el UpdateUsuarioDto son opcionales y permiten actualizar ciertos atributos 
 * de un usuario existente de manera selectiva.
*/