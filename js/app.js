const homeBtn = document.getElementById("home");
const calcBtn = document.getElementById("calc");
const bookBtn = document.getElementById("book");
const profileBtn = document.getElementById("profile");
const funktionenBtn = document.getElementById("funktionen");

homeBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
})

calcBtn.addEventListener("click", () => {
  window.location.href = "./rechner.html";
})

bookBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
})

profileBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
})

funktionenBtn.addEventListener("click", () => {
  window.location.href = "./funktionen.html";
})

// Variablen zur Speicherung der Swipe-Koordinaten
let touchStartX = 0;
let touchEndX = 0;

// Wischevents für das gesamte Body-Element registrieren
document.body.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].screenX;
});

document.body.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 80; // Mindestanzahl an Pixeln, um als Swipe zu gelten
  if (touchEndX > touchStartX + swipeThreshold) {
    console.log('Nach rechts gewischt! Gehe zurück in der History.');
    history.back(); // Geht einen Schritt in der History zurück
  }
}

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.15}s`; // 100ms Verzögerung pro Karte
});

function linFkt () {
    let inputWertk = document.getElementById("k").value;
    let inputWertd = document.getElementById("d").value;
    let k = parseFloat(inputWertk); 
    let d = parseFloat(inputWertd);
    let nullStelle = k * 0 + d;
    document.querySelector("#ergebnis").innerText = nullStelle;
}

function quadFkt () {
    let inputWerta = document.getElementById("a").value;
    let inputWertb = document.getElementById("b").value;
    let inputWertc = document.getElementById("c").value;
    let a = parseFloat(inputWerta);
    let b = parseFloat(inputWertb); 
    let c = parseFloat(inputWertc);
    let diskriminante = b * b - 4 * a * c;

    if (diskriminante < 0) {
        document.querySelector("#ergebnisquad").innerText = "Keine reellen Lösungen, da die Diskriminante negativ ist.";
        return;
    }
    let x1 = (-b + Math.sqrt(diskriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(diskriminante)) / (2 * a);
    let x1Gerundet = x1.toFixed(3);
    let x2Gerundet = x2.toFixed(3);
    document.querySelector("#ergebnisquad").innerText = "x1 = " + x1Gerundet + ", x2 = " + x2Gerundet ;
}

console.log(homeBtn, calcBtn, bookBtn, profileBtn, funktionenBtn);