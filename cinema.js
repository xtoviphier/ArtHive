// Video files array (replace with your 23 video names)
const videos = [
  "video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4", "video5.mp4",
  "video6.mp4", "video7.mp4", "video8.mp4", "video9.mp4", "video10.mp4",
  "video11.mp4", "video12.mp4", "video13.mp4", "video14.mp4", "video15.mp4",
  "video16.mp4", "video17.mp4", "video18.mp4", "video19.mp4", "video20.mp4",
  "video21.mp4", "video22.mp4", "video23.mp4"
];

let currentVideoIndex = 0;
const movieScreen = document.getElementById('movieScreen');

// Video details
const videoDetails = [
  { title: "AD", price: "$1,600" },
  { title: "SHIP", price: "$300" },
  { title: "RUN", price: "$340" },
  { title: "Applegrin", price: "$10" },
  { title: "blueski", price: "$10" },
  { title: "blued", price: "$10" },
  { title: "Dance1APPLE", price: "$10" },
  { title: "Dance1Lightblue", price: "$10" },
  { title: "galaxE", price: "$10" },
  { title: "NebulaDance", price: "$10" },
  { title: "Purpski", price: "$10" },
  { title: "PurrpDans", price: "$10" },
  { title: "budblood", price: "$5" },
  { title: "chocolatebud", price: "$5" },
  { title: "earthbud", price: "$5" },
  { title: "galaxybud", price: "$5" },
  { title: "LVbud", price: "$5" },
  { title: "Marblebud", price: "$5" },
  { title: "Marblebud2", price: "$5" },
  { title: "Moonbud", price: "$5" },
  { title: "OGbud", price: "$5" },
  { title: "onebud", price: "$5" },
  { title: "vibraniumbud", price: "$5" }
];

// Load first video
function loadVideo(index) {
  if (index >= 0 && index < videos.length) {
    movieScreen.src = videos[index];
    movieScreen.load();
    
    // Update details
    const details = videoDetails[index];
    document.getElementById('artist').textContent = "Artist: Christopher William Wambua";
    document.getElementById('title').textContent = "Title: " + details.title;
    document.getElementById('price').textContent = "Price: " + details.price;
  }
}

// Play/Pause toggle
function togglePlay() {
  if (movieScreen.paused) {
    movieScreen.play();
  } else {
    movieScreen.pause();
  }
}

// Next video
function nextVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  loadVideo(currentVideoIndex);
  movieScreen.play();
}

// Previous video
function prevVideo() {
  currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
  loadVideo(currentVideoIndex);
  movieScreen.play();
}

// Make screen clickable for navigation
document.addEventListener('click', (e) => {
  const rect = movieScreen.getBoundingClientRect();
  const x = e.clientX - rect.left;

  // Left side → previous
  if (x < rect.width / 2) {
    prevVideo();
  }
  // Right side → next
  else if (x > rect.width / 2) {
    nextVideo();
  }
  // Center → pause/play
  else {
    togglePlay();
  }
});

// Auto-loop video when it ends
movieScreen.addEventListener('ended', () => {
  movieScreen.currentTime = 0;
  movieScreen.play();
});

// Load first video on page load
window.onload = () => {
  loadVideo(currentVideoIndex);
};
