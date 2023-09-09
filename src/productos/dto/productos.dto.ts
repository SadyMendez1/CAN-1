// Define una clase llamada 'CreateProductoDto'
export class CreateProductoDto {
    // Declaración de propiedades de la clase 'CreateProductoDto'
    // Propiedad 'descripcion' de tipo string, que representa la descripcion del producto que se va a crear
    descripcion: string;

    // Propiedad 'proveedor' de tipo string, que representa el proveedor del producto que se va a crear
    proveedor: string;

    // Propiedad 'precio' de tipo string, que representa el precio del producto que se va a crear
    precio: string;

    // Propiedad 'stock' de tipo string, que representa el stock del producto que se va a crear
    stock: string;

    // Propiedad 'direccion' de tipo string, que representa la imagen del producto que se va a crear
    imagen: string;
}
// Define una clase llamada 'UpdateProductoDto'
export class UpdateProductoDto {
    // Declaración de propiedades de la clase 'UpdateProductoDto'

    // Propiedad 'descripcion' opcional de tipo string, que representa la nueva descripcion que se puede actualizar en el producto
    descripcion?: string;

    // Propiedad 'proveedor' opcional de tipo string, que representa el nuevo proveedor que se puede actualizar en el producto
    proveedor?: string;

    // Propiedad 'precio' opcional de tipo string, que representa el nuevo precio que se puede actualizar en el producto
    precio?: string;

    // Propiedad 'stock' opcional de tipo string, que representa el nuevo stock que se puede actualizar en el producto
    stock?: string;

    // Propiedad 'imagen' opcional de tipo string, que representa la nueva imagen que se puede actualizar en el producto
    imagen?: string;
}
/**
 * En resumen, estos DTOs (Data Transfer Objects) definen la estructura de datos que se 
 * utiliza para transferir información entre el cliente y el servidor al crear o actualizar 
 * objetos Producto. Los campos en el CreateProductoDto son obligatorios para crear un nuevo producto, 
 * mientras que los campos en el UpdateProductoDto son opcionales y permiten actualizar ciertos atributos 
 * de un producto existente de manera selectiva.
*/