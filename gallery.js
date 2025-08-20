// Open modal when artwork is clicked
document.querySelectorAll('.artwork').forEach(art => {
  art.addEventListener('click', () => {
    const title = art.dataset.art;
    const artist = art.dataset.artist;
    const price = art.dataset.price;

    document.getElementById('modalImage').src = art.querySelector('img').src;
    document.getElementById('artTitle').textContent = title;
    document.getElementById('artistName').textContent = artist;
    document.getElementById('artPrice').textContent = price;

    document.getElementById('artModal').style.display = 'block';
  });
});

// Close modal when X is clicked
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('artModal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  const modal = document.getElementById('artModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
