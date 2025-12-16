// TYPEWRITER EFFECT
const text = `I don’t know how life would look without you.
You walked in and made everything warmer.
You are not just a part of my life —
you are the reason it feels complete.

Happy Birthday ❤️`;

let i = 0;
const target = document.getElementById("typewriter");

function typeEffect() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 40);
  }
}
typeEffect();

// AUDIO PLAY ON USER INTERACTION (OVERLAY)
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  music.play()
    .then(() => {
      overlay.style.display = "none";
    })
    .catch(err => {
      console.log("Audio error:", err);
    });
});
