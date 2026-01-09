import { cars } from "./cars.js";

const salesCarContainer = document.querySelector(".sales-cars");

function renderCards(data) {
  if (!data || data.length === 0) {
    salesCarContainer.innerHTML = "<p>Nessuna auto disponibile al momento</p>";
    return;
  }

  const htmlCards = data
    .map(
      (auto) => `
  <div class="card">
            <img
              src="${auto.img}"
              alt="Foto dell'auto ${auto.name}"
              class="card-img"
            />

            <div class="card-info">
              <h2 class="card-title">${auto.name}</h2>
              <p class="card-model">${auto.model}</p>
              <p class="card-ali">Alimentazione: <span>${auto.ali}</span></p>
              <p class="card-km">Km: <span>${auto.km}</span></p>
              <p class="card-price">€ ${auto.price}</p>

              <button class="card-btn" aria-label="Visualizza dettagli per ${auto.name}">Visualizza Dettagli</button>
            </div>
          </div>
  `
    )
    .join("");
  salesCarContainer.innerHTML = htmlCards;
}

renderCards(cars);

// Gestione visibilità bottone "up" dopo 300px di scroll
const upButton = document.querySelector(".fixed-button.up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    upButton.classList.add("visible");
  } else {
    upButton.classList.remove("visible");
  }
});
