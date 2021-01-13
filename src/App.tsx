import "./App.css";

export default function App() {
  var images = [
    "https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg",
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
    "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg",
    "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
  ],
  delay = 10000, // 3 seconds
  pointer = 0;



setInterval(function () {
  var image = images[pointer % images.length];
  document.body.style.backgroundImage = "url(" + image + ")";

  pointer += 1;
}, delay);

return "";
}
