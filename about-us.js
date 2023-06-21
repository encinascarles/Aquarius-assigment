const siguenos = document.getElementById("siguenos");
const marca = document.getElementById("marca");
const conoce = document.getElementById("conoce");

const tabList = [siguenos, marca, conoce];

const styleTab = (t, active) => {
  t.style.borderBottom = active ? "4px solid red" : "none";
  t.style.fontWeight = active ? "bold" : "normal";
};

const select = (tab) => tabList.forEach((t) => styleTab(t, t === tab));

const replaceAboutUs = (html) => {
  const listItem = document.querySelector(".about-us .content");
  const newItem = document.createElement("div");
  newItem.classList.add("content");
  newItem.innerHTML = html;
  listItem.parentNode.replaceChild(newItem, listItem);
};

const socialNetworks = ["Facebook", "Twitter", "YouTube", "Instagram"];

function changeToSiguenos() {
  replaceAboutUs(
    `<div id="siguenos-content">${socialNetworks
      .map((social) => `<img src="resources/images/${social}_100x100.png">`)
      .join("")}</div>`
  );
  select(siguenos);
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
  replaceAboutUs(
    `<div id="marcas-content">${images
      .map((img) => `<img src="resources/images/${img}">`)
      .join("")}</div>`
  );
  select(marca);
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
  replaceAboutUs(
    `<div id="conoce-content">${Object.entries(world)
      .map(
        ([continent, countries]) =>
          `<div><h2>${continent}</h2><p>${countries
            .map((country) => `${country}<br />`)
            .join("")}</p></div>`
      )
      .join("")}</div>`
  );
  select(conoce);
}

siguenos.addEventListener("click", changeToSiguenos);
marca.addEventListener("click", changeToMarca);
conoce.addEventListener("click", changeToConoce);
