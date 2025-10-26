function guardarProductoDB(producto) {
  let productos = cargarProductos();
  const index = productos.findIndex(p => p.id === producto.id);
  if (index >= 0) {
    productos[index] = producto;
  } else {
    producto.id = producto.id || 'prod_' + Date.now();
    productos.push(producto);
  }
  localStorage.setItem('productosFloristeria', JSON.stringify(productos));
}

function cargarProductos() {
  const data = localStorage.getItem('productosFloristeria');
  return data ? JSON.parse(data) : [];
}