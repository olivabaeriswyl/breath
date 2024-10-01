const pageOne = document.querySelector(".page-one");
const pageTwo = document.querySelector(".page-two");
const btnStart = document.querySelector(".btn-start");

function intro() {
  setTimeout(function changeOpacityPageOne() {
    pageOne.style.opacity = "1"; // Définit l'opacité à 50%
  }, 2000);

  setTimeout(function changeOpacityPageOne() {
    pageOne.style.opacity = "0"; // Définit l'opacité à 0%
  }, 4000);

  setTimeout(function changeOpacityPageTwo() {
    pageTwo.style.opacity = "1"; // Définit l'opacité à 50%
  }, 5000);
}

intro();

btnStart.addEvenetListener("click", function () {});

// Selectionner input compte rebour puis changer les valeurs en fonction du temps
