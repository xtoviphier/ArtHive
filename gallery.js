// Wait for page to load
document.addEventListener('DOMContentLoaded', () => {
  // Get all hotspot areas
  const hotspots = document.querySelectorAll('area');

  // Get modal elements
  const modal = document.getElementById('artModal');
  const modalImage = document.getElementById('modalImage');
  const artistName = document.getElementById('artistName');
  const artTitle = document.getElementById('artTitle');
  const artPrice = document.getElementById('artPrice');
  const closeBtn = document.querySelector('.close');

  // Open modal when hotspot is clicked
  hotspots.forEach(area => {
    area.addEventListener('click', (e) => {
      e.preventDefault();

      // Get data from clicked area
      const artist = area.dataset.artist;
      const title = area.dataset.art;
      const price = area.dataset.price;
      const imgSrc = `${title}.png`; // Assumes filenames: Philus.png, VV.png, etc.

      // Update modal content
      artistName.textContent = artist;
      artTitle.textContent = title;
      artPrice.textContent = price;
      modalImage.src = imgSrc;

      // Show modal
      modal.style.display = 'block';
    });
  });

  // Close modal when X is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
