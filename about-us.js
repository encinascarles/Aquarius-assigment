document.getElementById("marca").addEventListener("click", changeToMarca);
document.getElementById("siguenos").addEventListener("click", changeToSiguenos);
document.getElementById("conoce").addEventListener("click", changeToConoce);


function changeToSiguenos(){
    const listItem = document.querySelector(".about-us .content");
    const newItem = document.createElement('div');
    newItem.classList.add('content');
    newItem.innerHTML = '<p>PAGE 1 (CONTENT)</p>';
    listItem.parentNode.replaceChild(newItem, listItem);
}
function changeToMarca(){
    const listItem = document.querySelector(".about-us .content");
    const newItem = document.createElement('div');
    newItem.classList.add('content');
    newItem.innerHTML = '<p>PAGE 2 (CONTENT)</p>';
    listItem.parentNode.replaceChild(newItem, listItem);
}
function changeToConoce(){
    const listItem = document.querySelector(".about-us .content");
    const newItem = document.createElement('div');
    newItem.classList.add('content');
    newItem.innerHTML = '<p>PAGE 3 (CONTENT)</p>';
    listItem.parentNode.replaceChild(newItem, listItem);
}

