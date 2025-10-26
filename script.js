// Fechas de temporada alta (ajustables)
const temporadasAltas = [
  { inicio: "2025-02-01", fin: "2025-02-15" }, // San Valentín
  { inicio: "2025-05-01", fin: "2025-05-15" }, // Día de la Madre
  { inicio: "2025-11-15", fin: "2025-12-31" }  // Navidad y fin de año
];

function estaEnTemporadaAlta(hoy) {
  return temporadasAltas.some(t => {
    const ini = new Date(t.inicio);
    const fin = new Date(t.fin);
    return hoy >= ini && hoy <= fin;
  });
}

// Aplicar precios según la fecha actual
document.addEventListener('DOMContentLoaded', () => {
  const hoy = new Date();
  const enTemporadaAlta = estaEnTemporadaAlta(hoy);

  document.querySelectorAll('.producto').forEach(prod => {
    const precioBaja = parseFloat(prod.dataset.precioBaja);
    const precioAlta = parseFloat(prod.dataset.precioAlta);
    const precioMostrar = enTemporadaAlta ? precioAlta : precioBaja;
    prod.querySelector('.precio span').textContent = precioMostrar.toLocaleString();
  });

  // Opcional: mostrar en consola para depuración
  console.log(`Hoy: ${hoy.toISOString().split('T')[0]} → Temporada: ${enTemporadaAlta ? 'Alta' : 'Baja'}`);
});