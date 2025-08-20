// After "more than a billion" finishes its first cycle (~60s), show the tagline
setTimeout(() => {
  const tagline = document.getElementById('tagline');
  tagline.style.opacity = '1';
}, 60000); // Shows after 3 seconds (for testing)
// Use 60000 for 1 minute: setTimeout(() => { ... }, 60000);
