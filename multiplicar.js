//  multiplicar.js — Generador de Tablas Dinámico
//  Creado por: sonicse

 
function generarTablas() {
 
  let contenedor = document.getElementById("contenedor");

  let input = document.getElementById("numeroInput");
  let numero = parseInt(input.value);

  if (isNaN(numero) || numero < 1 || numero > 12) {
    contenedor.innerHTML = `
      <div class="error-msg">
        ⚠ ERROR: Ingresa un número válido entre 1 y 12.
      </div>
    `;
    return;
  }
 
  let contenido = `
    <p class="tabla-title">&gt; TABLA DEL ${numero} — EJECUTANDO...</p>
    <div class="tabla-grid">
  `;
 
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;

    contenido += `
      <div class="fila">
        <span class="num-base">${numero}</span>
        <span class="operador">×</span>
        <span class="multiplicador">${i}</span>
        <span class="igual">=</span>
        <span class="resultado">${resultado}</span>
      </div>
    `;
  }
 
  contenido += `</div>`; 
  contenedor.innerHTML = contenido;
}