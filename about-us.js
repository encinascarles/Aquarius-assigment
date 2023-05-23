document.getElementById("siguenos").addEventListener("click", changeToSiguenos);
document.getElementById("marca").addEventListener("click", changeToMarca);
document.getElementById("conoce").addEventListener("click", changeToConoce);

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

  document.getElementById("siguenos").style.borderBottom = "4px solid red";
  document.getElementById("marca").style.borderBottom = "none";
  document.getElementById("conoce").style.borderBottom = "none";
  document.getElementById("siguenos").style.fontWeight = "bold";
  document.getElementById("marca").style.fontWeight = "normal";
  document.getElementById("conoce").style.fontWeight = "normal";
}
function changeToMarca() {
  const listItem = document.querySelector(".about-us .content");
  const newItem = document.createElement("div");
  newItem.classList.add("content");
  newItem.innerHTML = `<div id="marcas-content">
  <img src="resources/images/coca-cola-gris.png">
  <img src="resources/images/fanta-gris.png">
  <img src="resources/images/sprite-gris.png">
  <img src="resources/images/aquarius-gris.png">
  <img src="resources/images/honest-gris.png">
  <img src="resources/images/powerade-gris.png">
  <img src="resources/images/royal-bliss-gris.png">
  <img src="resources/images/nordic-gris.png">
  <img src="resources/images/appletiser-gris.png">
  <img src="resources/images/nestea-gris.png">
  <img src="resources/images/minute-maid-gris.png">
  <img src="resources/images/aquabona-gris.png">
  <img src="resources/images/vilas-del-turbon-gris.png">
  <img src="resources/images/smartwater-gris.png">
  <img src="resources/images/krystal-gris.png">
  <img src="resources/images/mare-rosso-gris-v2.png">
  <img src="resources/images/schuss-gris.png">
  <img src="resources/images/fuze-tea-gris.png">
</div>`;
  listItem.parentNode.replaceChild(newItem, listItem);

  document.getElementById("siguenos").style.borderBottom = "none";
  document.getElementById("marca").style.borderBottom = "4px solid red";
  document.getElementById("conoce").style.borderBottom = "none";
  document.getElementById("siguenos").style.fontWeight = "normal";
  document.getElementById("marca").style.fontWeight = "bold";
  document.getElementById("conoce").style.fontWeight = "normal";
}
function changeToConoce() {
  const listItem = document.querySelector(".about-us .content");
  const newItem = document.createElement("div");
  newItem.classList.add("content");
  newItem.innerHTML = "<p>PAGE 3 (CONTENT)</p>";
  listItem.parentNode.replaceChild(newItem, listItem);

  document.getElementById("siguenos").style.borderBottom = "none";
  document.getElementById("marca").style.borderBottom = "none";
  document.getElementById("conoce").style.borderBottom = "4px solid red";
  document.getElementById("siguenos").style.fontWeight = "normal";
  document.getElementById("marca").style.fontWeight = "normal";
  document.getElementById("conoce").style.fontWeight = "bold";
}
