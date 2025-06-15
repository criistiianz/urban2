// helpers/funciones.js

// 👉 Formatear moneda en pesos colombianos
export function formatearPesos(valor) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(valor);
}

// 👉 Validar si un objeto tiene campos vacíos
export function camposVacios(obj) {
  return Object.values(obj).some(valor => valor.trim() === '');
}

// 👉 Obtener fecha actual en formato YYYY-MM-DD
export function obtenerFechaActual() {
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
  const dia = String(hoy.getDate()).padStart(2, '0');
  return `${año}-${mes}-${dia}`;
}

// 👉 Capitalizar texto
export function capitalizarTexto(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// 👉 Calcular total de una venta con array de productos
export function calcularTotalVenta(productos) {
  return productos.reduce((total, producto) => {
    return total + (producto.precio * producto.cantidad);
  }, 0);
}

// 👉 Validar correo electrónico
export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 👉 Buscar cliente por cédula
export function buscarClientePorCedula(clientes, cedula) {
  return clientes.find(cliente => cliente.cedula === cedula);
}

// 👉 Generar ID aleatorio para nuevos registros
export function generarIdAleatorio(longitud = 8) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < longitud; i++) {
    id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return id;
}
