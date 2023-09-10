// Define una clase llamada 'CreateProveedorDto'
export class CreateProveedorDto {
    // Declaración de propiedades de la clase 'CreateProveedorDto'

    // Propiedad 'nombre_prov' de tipo string, que representa el nombre del proveedor que se va a crear
    nombre_prov: string;

    // Propiedad 'correo' de tipo string, que representa el correo electrónico del proveedor que se va a crear
    correo: string;

    // Propiedad 'telefono' de tipo string, que representa el número de teléfono del proveedor que se va a crear
    telefono: string;

    // Propiedad 'direccion' de tipo string, que representa la dirección del proveedor que se va a crear
    direccion: string;
}
// Define una clase llamada 'UpdateProveedorDto'
export class UpdateProveedorDto {
    // Declaración de propiedades de la clase 'UpdateProveedorDto'

    // Propiedad 'nombre_prov' opcional de tipo string, que representa el nuevo nombre que se puede actualizar en el proveedor
    nombre_prov?: string;

    // Propiedad 'correo' opcional de tipo string, que representa el nuevo correo electrónico que se puede actualizar en el proveedor
    correo?: string;

    // Propiedad 'telefono' opcional de tipo string, que representa el nuevo número de teléfono que se puede actualizar en el proveedor
    telefono?: string;

    // Propiedad 'direccion' opcional de tipo string, que representa la nueva dirección que se puede actualizar en el proveedor
    direccion?: string;
}
/**
 * En resumen, estos DTOs (Data Transfer Objects) definen la estructura de datos que se 
 * utiliza para transferir información entre el cliente y el servidor al crear o actualizar 
 * objetos Proveedor. Los campos en el CreateProveedorDto son obligatorios para crear un nuevo proveedor, 
 * mientras que los campos en el UpdateProveedorDto son opcionales y permiten actualizar ciertos atributos 
 * de un proveedor existente de manera selectiva.
*/