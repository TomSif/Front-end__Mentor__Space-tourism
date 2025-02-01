window.addEventListener("DOMContentLoaded", ariaHidden);
window.addEventListener("resize", ariaHidden);

function openModal() {
  const modal = document.getElementById("myModal");
  modal.classList.remove("hidden");
  modal.classList.add("right-0");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    modal.classList.remove("right-[-254px]");
    modal.setAttribute("aria-hidden", "false");
    const firstItemModal = document.getElementById("myModalFirstItem");
    firstItemModal.classList.add("active");
    firstItemModal.setAttribute("tabindex", "0");
    firstItemModal.focus(); // Met le focus sur le premier élément
  }, 50);
  console.log("click");
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.classList.remove("right-0");
  modal.classList.add("right-[-254px]");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
    const btnOpen = document.querySelector(".btn-open");
    btnOpen.focus(); // Renvoie le focus sur le bouton d'ouverture du menu
  }, 300);
}

function ariaHidden() {
  const nav = document.getElementById("myNav");
  if (window.innerWidth < 769) {
    nav.setAttribute("aria-hidden", "true");
  } else {
    nav.setAttribute("aria-hidden", "false");
  }
}

//function to autofocus home
const firstItem = document.querySelector("#myList li a");
firstItem.classList.add("active");
firstItem.setAttribute("tabindex", "0");
firstItem.focus(); // Met le focus sur le premier élément

//function fetch json
document.addEventListener("DOMContentLoaded", () => {
  // Sélectionne tous les boutons de navigation
  const buttons = document.querySelectorAll(".destination__navigation__btn");

  // Sélectionne les éléments du DOM à mettre à jour
  const title = document.getElementById("destination-title");
  const description = document.getElementById("destination-description");
  const distance = document.getElementById("destination-distance");
  const travel = document.getElementById("destination-travel");
  const image = document.getElementById("destination-image");

  // Charger les données depuis le fichier JSON
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const destinations = data.destinations; // Récupère les destinations du JSON

      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const destination = destinations[index]; // Sélectionne la destination correspondante

          // Met à jour le contenu du DOM
          title.innerText = destination.name;
          description.innerText = destination.description;
          distance.innerText = destination.distance;
          travel.innerText = destination.travel;
          image.src = destination.images.png; // Change l'image
          image.alt = `Image de ${destination.name}`;
        });
      });
    })
    .catch((error) => console.error("Erreur de chargement du JSON :", error));
});
