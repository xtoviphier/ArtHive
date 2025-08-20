// Get all hotspot areas
const hotspots = document.querySelectorAll('area');

// Open modal when hotspot is clicked
hotspots.forEach(area => {
  area.addEventListener('click', (e) => {
    e.preventDefault();

    const title = area.dataset.art;
    const artist = area.dataset.artist;
    const price = area.dataset.price;
    const imgSrc = area.alt === 'Philus' ? 'Philus.png' :
                   area.alt === 'VV' ? 'VV.png' :
                   area.alt === 'Fyer' ? 'Fyer.png' :
                   area.alt === 'Myror' ? 'Myror.png' :
                   area.alt === 'Mortis' ? 'Mortis.png' :
                   area.alt === 'Fruity' ? 'Fruity.png' : '';

    document.getElementById('modalImage').src = imgSrc;
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
