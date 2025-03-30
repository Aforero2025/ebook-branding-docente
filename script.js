// script.js

function showImageModal(imageName) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');

  modal.style.display = 'block';
  modalImg.src = `assets/${imageName}.png`;
  captionText.innerHTML = imageName.replace(/_/g, ' ').toUpperCase();
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Permitir abrir cualquier imagen con clase 'interactive-image'
document.querySelectorAll('.interactive-image').forEach(img => {
  img.addEventListener('click', () => {
    showImageModal(img.src.split('/').pop().replace('.png', ''));
  });
});

// Función para calcular el promedio de autoevaluación con retroalimentación
function calcularPromedio() {
  const inputs = document.querySelectorAll('.puntuacion');
  let suma = 0;
  let cantidad = 0;

  inputs.forEach(input => {
    const valor = parseFloat(input.value);
    if (!isNaN(valor) && valor >= 1 && valor <= 5) {
      suma += valor;
      cantidad++;
    }
  });

  const resultado = document.getElementById('resultado-promedio');
  if (cantidad > 0) {
    const promedio = (suma / cantidad).toFixed(2);
    let mensaje = `Tu promedio de autoevaluación es: ${promedio}/5.`;

    if (promedio >= 4.5) {
      mensaje += " ¡Excelente! Tu marca docente está muy consolidada.";
    } else if (promedio >= 3.5) {
      mensaje += " Vas por buen camino. Sigue fortaleciendo tu presencia profesional.";
    } else {
      mensaje += " Es momento de trabajar en tu posicionamiento. Revisa los capítulos anteriores para mejorar.";
    }

    resultado.textContent = mensaje;
  } else {
    resultado.textContent = 'Por favor, completa todas las puntuaciones válidas (1 a 5).';
  }
}
