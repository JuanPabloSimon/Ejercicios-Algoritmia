export default function manejarCarrito(producto, cantidad, carrito = []) {
  const carro = carrito; // creamos carrito
  // si esta vacío, simplemente agregamos el producto en su formato
  if (carrito.length === 0) {
    carro.push([
      producto.id,
      {
        cantidad: cantidad,
        producto: {
          ...producto,
        },
      },
    ]);
  } else {
    // si no esta creado buscamos el producto recibido
    let element = carro.find((el) => el[0] === producto.id);
    if (element) { // si el producto exite , modificamos su cantidad 
      element[1].cantidad += cantidad;
      if (element[1].cantidad <= 0) { // si la cantidad es menor a 0, eliminamos el producto del carrito
        carro.splice(0, 1); 
      } else {  // si no es menor a 0, reemplazamos el producto con el elemento modificado
        carro.splice(carro.indexOf(element), 1, element);
      }
    }
  }
  return carro;
}
