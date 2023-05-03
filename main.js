// Definimos un objeto que representa el kiosko
const kiosko = {
    nombre: "Mi Kiosko",
    articulos: [
      { nombre: "Gaseosa", precio: 500 },
      { nombre: "Papas fritas", precio: 350 },
      { nombre: "Chicles", precio: 150 },
      { nombre: "Cigarrillos", precio: 700 },
      { nombre: "Sandwich", precio: 620 },
      { nombre: "Alfajor", precio: 300 },
      { nombre: "Galletitas", precio: 315 }
    ]
  };
  
  // Función que muestra los artículos a la venta
  function mostrarArticulos() {
    let mensaje = "Artículos que vendemos:\n";
    kiosko.articulos.forEach((articulo, index) => {
      mensaje += (index+1) + ". " + articulo.nombre + " - $" + articulo.precio + "\n";
    });
    alert(mensaje);
  }
  
  // Función que hace la venta de un artículo
  function hacerVenta() {
    let total = 0;
    let mensaje = "Resumen de venta:\n";
    const opcion = prompt("Ingrese el número de lo que desea comprar (1-" + kiosko.articulos.length + "):");
    const articulo = kiosko.articulos[opcion-1];
    const cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
    total = articulo.precio * cantidad;
    mensaje += "- Artículo: " + articulo.nombre + "\n";
    mensaje += "- Cantidad: " + cantidad + "\n";
    mensaje += "- Precio c/u: $" + articulo.precio + "\n";
    mensaje += "- Total: $" + total + "\n";
    mensaje += "¡Gracias por su compra!";
    alert(mensaje);
  }
  

  // Mostramos los artículos disponibles
  mostrarArticulos();
  
  // Realizamos la venta de un artículo
  hacerVenta();