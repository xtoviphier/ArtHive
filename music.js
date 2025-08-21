// Music files array (replace with your actual filenames)
const songs = [
  "22.1.24.wav", "24.1.22.wav", "2rf.wav", "4geoff.mp3", "AHK.mp3",
  "BABY CARTI.mp3", "BIGEYE.mp3", "BLU3 BLU3 BEAT.mp3", "CAVE DWELLER.mp3",
  "FINAL BOSS BATTLE.mp3", "FIRMLY.mp3", "G5ORBSLIME.mp3", "Lesotho.mp3",
  "Q.mp3", "SHAPES.mp3", "SHOVE YOUR WRIST IN THE BLENDER AND HAVE A GOOD DAY.mp3",
  "SM.mp3", "SUNDAY WEDDING.mp3", "Songbird.mp3", "TESLA.mp3", "TL4L.mp3",
  "Tee.mp3", "Twisted.mp3", "WEGOTCHA.mp3", "WHER.mp3", "afr.mp3",
  "ahk1.mp3", "ahk2.3.mp3", "amovie.mp3", "balling.mp3", "bdness extended version.mp3",
  "bdness.mp3", "bim.mp3", "bodyone outro.mp3", "bonus.t.mp3", "bonustrack.mp3",
  "casso original.mp3", "combination.mp3", "comet.edit.mp3", "ditmn.mp3", "dslie.mp3",
  "dublindown2.mp3", "ey cabron loop.mp3", "final v.mp3", "flint mixed edited.mp3",
  "flow.mp3", "flutelayered.mp3", "hm.wav", "instrumental.mp3", "interlude.mp3",
  "inuit.mp3", "keef.mp3", "menu.mp3", "nebula.wav", "nebulabu.mp3",
  "nebulaw.wav", "nife.mp3", "om$-bass boosted.mp3", "om$.mp3", "ocre.mp3",
  "orch.ello.mp3", "phdromu.mp3", "phonic.mp3", "raisus.wav", "rev.mp3",
  "romeo y juliet.mp3", "sample.mp3", "sax.mp3", "saxx.mp3", "seinfeild.remake.mp3",
  "snati.og.mp3", "soundoftrumpets.mp3", "spookeh.mp3", "stg.mp3", "stonaire.mp3",
  "szn2.mp3", "template808.wav", "tokkepi-other.mp3", "tuff.bt.mp3", "untitled.mp3",
  "untitled tears.mp3", "ydek.mp3", "ydekrev.mp3", "ymcmb.mp3"
];

let currentSongIndex = 0;
const musicPlayer = document.getElementById('musicPlayer');

// Song details
const songDetails = [
  { artist: "Pharaoh", title: "22.1.24", price: "$15" },
  { artist: "Pharaoh", title: "24.1.22", price: "$15" },
  { artist: "Pharaoh", title: "2rf", price: "$7" },
  { artist: "RUFFO", title: "4geoff", price: "$28" },
  { artist: "Pharaoh", title: "AHK", price: "$30" },
  { artist: "RUFFO", title: "BABY CARTI", price: "$20" },
  { artist: "RUFFO", title: "BIGEYE", price: "$50" },
  { artist: "RUFFO", title: "BLU3 BLU3 BEAT", price: "$20" },
  { artist: "RUFFO", title: "CAVE DWELLER", price: "$45" },
  { artist: "RUFFO", title: "FINAL BOSS BATTLE", price: "$15" },
  { artist: "RUFFO", title: "FIRMLY", price: "$75" },
  { artist: "RUFFO", title: "G5ORBSLIME", price: "$100" },
  { artist: "Pharaoh", title: "Lesotho", price: "$20" },
  { artist: "Pharaoh", title: "Q", price: "$5" },
  { artist: "RUFFO", title: "SHAPES", price: "$35" },
  { artist: "RUFFO", title: "SHOVE YOUR WRIST IN THE BLENDER AND HAVE A GOOD DAY", price: "$10" },
  { artist: "RUFFO", title: "SM", price: "$30" },
  { artist: "RUFFO", title: "SUNDAY WEDDING", price: "$20" },
  { artist: "Pharaoh", title: "Songbird", price: "$130" },
  { artist: "RUFFO", title: "TESLA", price: "$100" },
  { artist: "Pharaoh", title: "TL4L", price: "$60" },
  { artist: "Pharaoh", title: "Tee", price: "$10" },
  { artist: "Pharaoh", title: "Twisted", price: "$15" },
  { artist: "RUFFO", title: "WEGOTCHA", price: "$10" },
  { artist: "RUFFO", title: "WHER", price: "$10" },
  { artist: "Pharaoh", title: "afr", price: "$5" },
  { artist: "Pharaoh", title: "ahk1", price: "$75" },
  { artist: "Pharaoh", title: "ahk2.3", price: "$80" },
  { artist: "Pharaoh", title: "amovie", price: "$8" },
  { artist: "Pharaoh", title: "balling", price: "$30" },
  { artist: "Pharaoh", title: "bdness extended version", price: "$100" },
  { artist: "Pharaoh", title: "bdness", price: "$85" },
  { artist: "Pharaoh", title: "bim", price: "$75" },
  { artist: "Pharaoh", title: "bodyone outro", price: "$35" },
  { artist: "Pharaoh", title: "bonus.t", price: "$45" },
  { artist: "Pharaoh", title: "bonustrack", price: "$60" },
  { artist: "Pharaoh", title: "casso original", price: "$70" },
  { artist: "Pharaoh", title: "combination", price: "$100" },
  { artist: "Pharaoh", title: "comet.edit", price: "$25" },
  { artist: "Pharaoh", title: "ditmn", price: "$80" },
  { artist: "Pharaoh", title: "dslie", price: "$30" },
  { artist: "Pharaoh", title: "dublindown2", price: "$40" },
  { artist: "Pharaoh", title: "ey cabron loop", price: "$60" },
  { artist: "Pharaoh", title: "final v", price: "$5" },
  { artist: "Pharaoh", title: "flint mixed edited", price: "$85" },
  { artist: "Pharaoh", title: "flow", price: "$20" },
  { artist: "Pharaoh", title: "flutelayered", price: "$10" },
  { artist: "Pharaoh", title: "hm", price: "$65" },
  { artist: "Pharaoh", title: "instrumental", price: "$45" },
  { artist: "Pharaoh", title: "interlude", price: "$25" },
  { artist: "Pharaoh", title: "inuit", price: "$1" },
  { artist: "Pharaoh", title: "keef", price: "$10" },
  { artist: "Pharaoh", title: "menu", price: "$15" },
  { artist: "Pharaoh", title: "nebula", price: "$10" },
  { artist: "Pharaoh", title: "nebulabu", price: "$10" },
  { artist: "Pharaoh", title: "nebulaw", price: "$5" },
  { artist: "Pharaoh", title: "nife", price: "$100" },
  { artist: "Pharaoh", title: "om$-bass boosted", price: "$100" },
  { artist: "Pharaoh", title: "om$", price: "$85" },
  { artist: "Pharaoh", title: "ocre", price: "$100" },
  { artist: "Pharaoh", title: "orch.ello", price: "$20" },
  { artist: "Pharaoh", title: "phdromu", price: "$65" },
  { artist: "Pharaoh", title: "phonic", price: "$60" },
  { artist: "Pharaoh", title: "raisus", price: "$40" },
  { artist: "Pharaoh", title: "rev", price: "$90" },
  { artist: "Pharaoh", title: "romeo y juliet", price: "$30" },
  { artist: "Pharaoh", title: "sample", price: "$65" },
  { artist: "Pharaoh", title: "sax", price: "$100" },
  { artist: "Pharaoh", title: "saxx", price: "$100" },
  { artist: "Pharaoh", title: "seinfeild.remake", price: "$10" },
  { artist: "Pharaoh", title: "snati.og", price: "$50" },
  { artist: "Pharaoh", title: "soundoftrumpets", price: "$30" },
  { artist: "RUFFO", title: "spookeh", price: "$10" },
  { artist: "Pharaoh", title: "stg", price: "$10" },
  { artist: "Pharaoh", title: "stonaire", price: "$30" },
  { artist: "Pharaoh", title: "szn2", price: "$25" },
  { artist: "Pharaoh", title: "template808", price: "$40" },
  { artist: "RUFFO", title: "tokkepi-other", price: "$70" },
  { artist: "Pharaoh", title: "tuff.bt", price: "$10" },
  { artist: "Pharaoh", title: "untitled", price: "$65" },
  { artist: "Pharaoh", title: "untitled tears", price: "$80" },
  { artist: "Pharaoh", title: "yTan", price: "$75" },
  { artist: "Pharaoh", title: "yTekrev", price: "$75" },
  { artist: "Pharaoh", title: "ymcmb", price: "$100" }
];

// Load first song
function loadSong(index) {
  if (index >= 0 && index < songs.length) {
    musicPlayer.src = songs[index];
    musicPlayer.load();
    
    // Update details
    const details = songDetails[index];
    document.getElementById('artist').textContent = "Artist: " + details.artist;
    document.getElementById('title').textContent = "Title: " + details.title;
    document.getElementById('price').textContent = "Price: " + details.price;
  }
}

// Play/Pause toggle
function togglePlay() {
  if (musicPlayer.paused) {
    musicPlayer.play();
  } else {
    musicPlayer.pause();
  }
}

// Next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  musicPlayer.play();
}

// Previous song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  musicPlayer.play();
}

// Make player clickable for navigation