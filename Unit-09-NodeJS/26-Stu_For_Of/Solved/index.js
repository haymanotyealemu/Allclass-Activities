const songs = document.getElementsByTagName('li');

for (const song of songs) {
  
  song.classList.add("green");
  song.setAttribute("style","color:red;");
  
}
