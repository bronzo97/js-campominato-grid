/*
    creare una griglia 10x10
    inserire all'interno della griglia i vari numeri
    aggiungere l'eventlistener che aggiunge il background al click
*/

const gridContainer = document.querySelector(".grid-container");

for (let i = 1; i <= 100; i++) {
    console.log(i);
  //gridContainer.innerHTML += `<p>${i}</p>`;
    const paragrafoNuovo = document.createElement("div");
    paragrafoNuovo.innerText = i;
    paragrafoNuovo.addEventListener("click", function (event) {
    const elementoCliccato = event.target;
    const classi = elementoCliccato.classList;
    classi.add("colorato");
    console.log(elementoCliccato.innerText);
    });
    gridContainer.appendChild(paragrafoNuovo);
}