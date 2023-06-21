const siguenos = document.getElementById("siguenos");
const marca = document.getElementById("marca");
const conoce = document.getElementById("conoce");

function changeToSiguenos() {
  const listItem = document.querySelector(".about-us .content");
  const newItem = document.createElement("div");
  newItem.classList.add("content");
  newItem.innerHTML = `<div id="siguenos-content">
    <img src="resources/images/Facebook_100x100.png">
    <img src="resources/images/Twitter_100x100.png">
    <img src="resources/images/YouTube_100x100.png">
    <img src="resources/images/Instagram_100x100.png">
  </div>`;
  listItem.parentNode.replaceChild(newItem, listItem);

  siguenos.style.borderBottom = "4px solid red";
  marca.style.borderBottom = "none";
  conoce.style.borderBottom = "none";
  siguenos.style.fontWeight = "bold";
  marca.style.fontWeight = "normal";
  conoce.style.fontWeight = "normal";
}

const images = [
  "coca-cola-gris.png",
  "fanta-gris.png",
  "sprite-gris.png",
  "aquarius-gris.png",
  "honest-gris.png",
  "powerade-gris.png",
  "royal-bliss-gris.png",
  "nordic-gris.png",
  "appletiser-gris.png",
  "nestea-gris.png",
  "minute-maid-gris.png",
  "aquabona-gris.png",
  "vilas-del-turbon-gris.png",
  "smartwater-gris.png",
  "krystal-gris.png",
  "mare-rosso-gris-v2.png",
  "schuss-gris.png",
  "fuze-tea-gris.png",
];

function changeToMarca() {
  const listItem = document.querySelector(".about-us .content");
  const newItem = document.createElement("div");
  newItem.classList.add("content");
  const imageListHtml = images
    .map((img) => `<img src="resources/images/${img}">`)
    .join("");
  newItem.innerHTML = `<div id="marcas-content">${imageListHtml}</div>`;
  listItem.parentNode.replaceChild(newItem, listItem);

  siguenos.style.borderBottom = "none";
  siguenos.style.fontWeight = "normal";
  marca.style.borderBottom = "4px solid red";
  marca.style.fontWeight = "bold";
  conoce.style.borderBottom = "none";
  conoce.style.fontWeight = "normal";
}

const world = {
  "North America": ["Global", "Canada (English)", "Canada (French)"],
  "Latin America": [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Dominican Republic",
    "Ecuador",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Paraguay",
    "Peru",
    "Uruguay",
    "Venezuela",
  ],
  Africa: ["Ivory Coast", "Kenya", "Nigeria", "South Africa"],
  Europe: [
    "Austria",
    "Belgium and Luxembourg (Dutch)",
    "Belgium and Luxembourg (French)",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Great Britain",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Netherlands",
    "North Macedonia",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland (German)",
    "Switzerland (French)",
    "Ukraine",
  ],
  Eurasia: [
    "Middle East (Arabic)",
    "Middle East (English)",
    "Morocco",
    "Pakistan",
  ],
  "Asia Pacific": [
    "Australia",
    "China",
    "China - Hong Kong",
    "India",
    "Indonesia (Bahasa Indonesia)",
    "Indonesia (English)",
    "Japan",
    "Malaysia (English)",
    "Malaysia (Malay)",
    "New Zealand",
    "Singapore",
    "South Korea",
    "Vietnam (English)",
    "Vietnam (Vietnamese)",
  ],
};

function changeToConoce() {
  const listItem = document.querySelector(".about-us .content");
  const newItem = document.createElement("div");
  newItem.classList.add("content");
  const worldHtml = Object.entries(world).map(
    ([continent, countries]) =>
      `<div><h2>${continent}</h2><p>${countries
        .map((country) => `${country}<br />`)
        .join("")}</p></div>`
  ).join("");
  newItem.innerHTML = `<div id="conoce-content">${worldHtml}</div>`;
  listItem.parentNode.replaceChild(newItem, listItem);

  siguenos.style.borderBottom = "none";
  marca.style.borderBottom = "none";
  conoce.style.borderBottom = "4px solid red";
  siguenos.style.fontWeight = "normal";
  marca.style.fontWeight = "normal";
  conoce.style.fontWeight = "bold";
}

siguenos.addEventListener("click", changeToSiguenos);
marca.addEventListener("click", changeToMarca);
conoce.addEventListener("click", changeToConoce);
