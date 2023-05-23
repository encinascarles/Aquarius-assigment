document.getElementById("siguenos").addEventListener("click", changeToSiguenos);
document.getElementById("marca").addEventListener("click", changeToMarca);
document.getElementById("conoce").addEventListener("click", changeToConoce);


function changeToSiguenos(){
    const listItem = document.querySelector(".about-us .content");
    const newItem = document.createElement('div');
    newItem.classList.add('content');
    newItem.innerHTML = '<p>PAGE 1 (CONTENT)</p>';
    listItem.parentNode.replaceChild(newItem, listItem);

    document.getElementById("siguenos").style.borderBottom='4px solid red';
    document.getElementById("marca").style.borderBottom='none';
    document.getElementById("conoce").style.borderBottom='none';
    document.getElementById("siguenos").style.fontWeight='bold';
    document.getElementById("marca").style.fontWeight='normal';
    document.getElementById("conoce").style.fontWeight='normal';
}
function changeToMarca(){
    const listItem = document.querySelector(".about-us .content");
    const newItem = document.createElement('div');
    newItem.classList.add('content');
    newItem.innerHTML = '<p>PAGE 2 (CONTENT)</p>';
    listItem.parentNode.replaceChild(newItem, listItem);

    document.getElementById("siguenos").style.borderBottom='none';
    document.getElementById("marca").style.borderBottom='4px solid red';
    document.getElementById("conoce").style.borderBottom='none';
    document.getElementById("siguenos").style.fontWeight='normal';
    document.getElementById("marca").style.fontWeight='bold';
    document.getElementById("conoce").style.fontWeight='normal';
}
function changeToConoce(){
    const listItem = document.querySelector(".about-us .content");
    const newItem = document.createElement('div');
    newItem.classList.add('content');
    newItem.innerHTML = '<p>PAGE 3 (CONTENT)</p>';
    listItem.parentNode.replaceChild(newItem, listItem);

    document.getElementById("siguenos").style.borderBottom='none';
    document.getElementById("marca").style.borderBottom='none';
    document.getElementById("conoce").style.borderBottom='4px solid red';
    document.getElementById("siguenos").style.fontWeight='normal';
    document.getElementById("marca").style.fontWeight='normal';
    document.getElementById("conoce").style.fontWeight='bold';
    
}

