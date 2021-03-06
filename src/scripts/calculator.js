//============================
//    Variables & Selectors
//============================
import "../stylesheets/calculator.css";

let calculation = document.querySelector('.calculator .calc-display p');
const buttons = document.querySelectorAll('.calculator .buttons');

//========================
//    Simple Function
//========================
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (calculation.innerText === "0") calculation.innerText = "";
    if (button.innerText === "AC") {
      calculation.innerText = "0";
    } else if (button.innerText === "=") {
      calculation.innerText = Math.round((eval(calculation.innerText)) * 100) / 100;
    } else if (button.innerText === "+/-") {
      calculation.innerText *= -1;
    } else if (button.innerText === "%") {
      calculation.innerText /= 100;
    } else {
      calculation.innerText += button.innerText;
    }
  });
});