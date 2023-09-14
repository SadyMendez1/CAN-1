// Define una clase llamada 'Usuario'
export class Producto {
    // Declaración de propiedades de la clase 'Usuario'

   // Propiedad 'idprod' de tipo string, que generalmente se utiliza para identificar de manera única a un producto
   id: string

   nombre: string

   // Propiedad 'nombre' de tipo string, que almacena el nombre del producto
   descripcion: string

   // Propiedad 'precio' de tipo string, que almacena el precio del producto
   precio: string

   // Propiedad 'stock' de tipo string, que almacena el stock del producto
   stock: string

   catId: string

   proveId: string
}

/** 
* En resumen, esta clase Producto define la estructura de datos de un producto en tu aplicación.
* Cada propiedad representa un atributo del producto, como su descripción, proveedor, etc. 
* Esta clase se utiliza típicamente como una entidad en un sistema, y se puede utilizar para crear, 
* leer, actualizar y eliminar registros de productos en una base de datos u otras operaciones relacionadas 
* con los productos en la aplicación. 
*/