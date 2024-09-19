/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "Tinki Winki",
    "Michael Jackson",
    "Milei",
    "Cristiano Ronaldo",
    "Lizzy Tagliani"
  ];
  let action = [
    "se comio",
    "incendio",
    "aniquilo",
    "enterro en mi patio",
    "vomito"
  ];
  let what = [
    "mi computadora",
    "mi casa",
    "mi perro",
    "mi integridad",
    "mi fe en la humanidad"
  ];
  let when = [
    "a la salida del estadio",
    "durante la cena",
    "cuando estaba estudiando",
    "a las 2 am",
    "el 3 de otoño"
  ];

  function getRandom(array) {
    let randomNumber = Math.random() * array.length
    let randomInt = Math.floor(randomNumber);
    return array[randomInt];
  }

  let excusa = `
${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}
`;

  console.log(excusa);
  document.getElementById("excuse").innerHTML = excusa;
};
