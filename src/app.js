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
  let action = ["se comio", "incendio", "aniquilo", "orino", "vomito"];
  let what = [
    "my computadora",
    "mi casa",
    "mi perro",
    "mi integridad",
    "mi fe en la humanidad"
  ];
  let when = [
    "a la salida del estadio",
    "durante la cena",
    "cuando estaba estudiando",
    "a las 2 de la mañana",
    "el 3 de otoño"
  ];

  function getRandom(array) {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }

  let excusa = `
${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}
`;

  console.log(excusa);
  document.getElementById("excuse").innerHTML = excusa;
};
