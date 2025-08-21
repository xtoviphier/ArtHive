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

// Load first video
function loadVideo(index) {
  if (index >= 0 && index < videos.length) {
    movieScreen.src = videos[index];
    movieScreen.load();
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

// Auto-play next video when current one ends
movieScreen.addEventListener('ended', () => {
  nextVideo();
});

// Make screen clickable for navigation
document.addEventListener('click', (e) => {
  const rect = movieScreen.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Left side of screen → previous
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

// Load first video on page load
window.onload = () => {
  loadVideo(currentVideoIndex);
};