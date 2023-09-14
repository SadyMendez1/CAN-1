// Define una clase llamada 'CreateProductoDto'
export class CreateProductoDto {
    // Declaración de propiedades de la clase 'CreateProductoDto'
    
    nombre: string;
    
    // Propiedad 'descripcion' de tipo string, que representa la descripcion del producto que se va a crear
    descripcion: string;

    // Propiedad 'precio' de tipo string, que representa el precio del producto que se va a crear
    precio: string;

    // Propiedad 'stock' de tipo string, que representa el stock del producto que se va a crear
    stock: string;

    catId: string;

    proveId: string;
}
// Define una clase llamada 'UpdateProductoDto'
export class UpdateProductoDto {
    // Declaración de propiedades de la clase 'UpdateProductoDto'

    nombre?: string;

    // Propiedad 'descripcion' opcional de tipo string, que representa la nueva descripcion que se puede actualizar en el producto
    descripcion?: string;

    // Propiedad 'precio' opcional de tipo string, que representa el nuevo precio que se puede actualizar en el producto
    precio?: string;

    // Propiedad 'stock' opcional de tipo string, que representa el nuevo stock que se puede actualizar en el producto
    stock?: string;

    catId?: string;

    proveId?: string;
}
/**
 * En resumen, estos DTOs (Data Transfer Objects) definen la estructura de datos que se 
 * utiliza para transferir información entre el cliente y el servidor al crear o actualizar 
 * objetos Producto. Los campos en el CreateProductoDto son obligatorios para crear un nuevo producto, 
 * mientras que los campos en el UpdateProductoDto son opcionales y permiten actualizar ciertos atributos 
 * de un producto existente de manera selectiva.
*/