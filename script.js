
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

document.querySelectorAll('.interactive-image').forEach(img => {
  img.addEventListener('click', () => {
    showImageModal(img.src.split('/').pop().replace('.png', ''));
  });
});
