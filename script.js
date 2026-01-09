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
              alt="Auto"
              class="card-img"
            />

            <div class="card-info">
              <h2 class="card-title">${auto.name}</h2>
              <p class="card-model">${auto.model}</p>
              <p class="card-ali">Alimentazione: <span>${auto.ali}</span></p>
              <p class="card-km">Km: <span>${auto.km}</span></p>
              <p class="card-price">€ ${auto.price}</p>

              <button class="card-btn">Visualizza Dettagli</button>
            </div>
          </div>
  `
    )
    .join("");
  salesCarContainer.innerHTML = htmlCards;
}

renderCards(cars);
