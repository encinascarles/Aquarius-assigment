const listItem = document.querySelector(".about-us .content");

const newItem = document.createElement('div');
newItem.classList.add('content');
newItem.innerHTML = '<p>PAGE 2 (CONTENT)</p>';

listItem.parentNode.replaceChild(newItem, listItem);