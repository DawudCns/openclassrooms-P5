// Sélection des éléments du DOM
const bannerImg = document.querySelector(".banner-img");
const arrow_next = document.querySelector(".arrow_right");
const arrow_previous = document.querySelector(".arrow_left");
const bannerDots = document.querySelectorAll(".dot");
const bannerParagraph = document.querySelector("p");

// Initialisation de l'index
let currentIndex = 0;

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// Fonction mise à jour "carrousel"
function updateCarousel() {
  bannerImg.setAttribute(
    "src",
    "assets/images/slideshow/" + slides[currentIndex].image
  );
  bannerParagraph.innerHTML = slides[currentIndex].tagLine;
  // Ajoute ou retire en fonction de l'index
  bannerDots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}
// Ajout des écouteurs d'événements sur les "dot"
bannerDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Met à jour l'index sur click
    currentIndex = index;
    updateCarousel();
  });
});
// Ajout des écouteurs d'événements sur les flèches
arrow_previous.addEventListener("click", () => {
  // diapositive précédente + mise à jour carousel
  currentIndex = (currentIndex - 1 + bannerDots.length) % bannerDots.length;
  updateCarousel();
});

arrow_next.addEventListener("click", () => {
  // diapositive suivant + mise à jour carousel
  currentIndex = (currentIndex + 1) % bannerDots.length;
  updateCarousel();
});
// Mise à jour initiale du carrousel
updateCarousel();
