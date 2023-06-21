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
function changeToConoce() {
  const listItem = document.querySelector(".about-us .content");
  const newItem = document.createElement("div");
  newItem.classList.add("content");
  newItem.innerHTML = `<div id="conoce-content">
  <div>
    <h2>North America</h2>
    <p>
      Global<br />
      Canada (English)<br />
      Canada (French)
    </p>
  </div>
  <div>
    <h2>North America</h2>
    <p>
      Global<br />
      Canada (English)<br />
      Canada (French)
    </p>
  </div>
  <div>
    <h2>Latin America</h2>
    <p>
      Argentina<br />
      Bolivia<br />
      Brazil<br />
      Chile<br />
      Colombia<br />
      Costa Rica<br />
      Dominican Republic<br />
      Ecuador<br />
      El Salvador<br />
      Guatemala<br />
      Honduras<br />
      Mexico<br />
      Nicaragua<br />
      Panama<br />
      Paraguay<br />
      Peru<br />
      Uruguay<br />
      Venezuela
    </p>
  </div>

  <div>
    <h2>Africa</h2>
    <p>
      Ivory Coast<br />
      Kenya<br />
      Nigeria<br />
      South Africa
    </p>
  </div>

  <div>
    <h2>Europe</h2>
    <p>
      Austria<br />
      Belgium and Luxembourg (Dutch)<br />
      Belgium and Luxembourg (French)<br />
      Bosnia and Herzegovina<br />
      Bulgaria<br />
      Croatia<br />
      Cyprus<br />
      Czech Republic<br />
      Denmark<br />
      Estonia<br />
      Finland<br />
      France<br />
      Germany<br />
      Great Britain<br />
      Greece<br />
      Hungary<br />
      Iceland<br />
      Ireland<br />
      Italy<br />
      Latvia<br />
      Lithuania<br />
      Netherlands<br />
      North Macedonia<br />
      Norway<br />
      Poland<br />
      Portugal<br />
      Romania<br />
      Russia<br />
      Serbia<br />
      Slovakia<br />
      Slovenia<br />
      Spain<br />
      Sweden<br />
      Switzerland (German)<br />
      Switzerland (French)<br />
      Ukraine
    </p>
  </div>

  <div>
    <h2>Eurasia</h2>
    <p>
      Middle East (Arabic)<br />
      Middle East (English)<br />
      Morocco<br />
      Pakistan
    </p>
  </div>

  <div>
    <h2>Asia Pacific</h2>
    <p>
      Australia<br />
      China<br />
      China - Hong Kong<br />
      India<br />
      Indonesia (Bahasa Indonesia)<br />
      Indonesia (English)<br />
      Japan<br />
      Malaysia (English)<br />
      Malaysia (Malay)<br />
      New Zealand<br />
      Singapore<br />
      South Korea<br />
      Vietnam (English)<br />
      Vietnam (Vietnamese)
    </p>
  </div>
</div>`;
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
