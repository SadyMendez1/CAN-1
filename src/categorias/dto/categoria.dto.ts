// Define una clase llamada 'CreateCategoriaDto'
export class CreateCategoriaDto {
    // Declaración de propiedades de la clase 'CreateCategoriaDto'

    // Propiedad 'nombre' de tipo string, que representa el nombre de la categoría que se va a crear
    descripcion: string;

}
// Define una clase llamada 'UpdateCategoriaDto'
export class UpdateCategoriaDto {
    // Declaración de propiedades de la clase ''UpdateCategoriaDto''

    // Propiedad 'nombre' opcional de tipo string, que representa el nuevo nombre que se puede actualizar en la categoria
    descripcion?: string;
}
/**
 * En resumen, estos DTOs (Data Transfer Objects) definen la estructura de datos que se 
 * utiliza para transferir información entre el cliente y el servidor al crear o actualizar 
 * objetos Categoría. Los campos en el CreateCategoriaDto son obligatorios para crear una nueva categoría, 
 * mientras que los campos en el UpdateCategoriaDto son opcionales y permiten actualizar ciertos atributos 
 * de una categoría existente de manera selectiva.
*/