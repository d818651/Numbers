









// Если ты читаешь этот код то ты Кирилл Герасименко или очень любопытный
// Но раз ты тут? то читай ниже.























// use prompt to ask for an integer, use alert to display entered value increased by one
function plusOne() {
  var answer = prompt("Please input integer number, I wont to add 1");
  Number.isInteger(answer) == false && isNaN(answer) == false ?
    alert("Rezult=" + (+answer + 1)) :
    alert("You not write number");
}

// use prompt to ask for a number, display true if the number is integer or false if it's float
function isItInteger() {
  var answer = parseFloat(prompt("Please input number for check by float"));
  Number.isInteger(answer) ?
    alert(answer + " is is Integer") :
    alert(answer + " is is Float");
  alert("Second way by %1");
  answer % 1 > 0 ? alert(answer + " is Float") : alert(answer + " is Integer");
}

// use prompt to ask for a number, use alert to display its opposite, e.g.: 1: -1, -34: 34
function getOpposite() {
  var number = prompt("Please input number");
  isNaN(number) == false ?
    alert("Rezult=" + -parseInt(number)) :
    alert("You not write number");
}

// use alert() to display the value of π constant

function showPi() {
  alert("Pi=" + Math.PI);
}
// use alert() to display the value of π constant with 2 numbers after the decimal point
function showShortenedPi() {
  alert("Pi with 2 digit=" + Math.PI.toFixed(2));
}

// * use prompt to ask for the number of minutes after the midnight, use alert to show the minutes value shown on the clock now. e.g. 61 minutes passed => 1 minute on the clock

function showMinutes() {
  var minutes = prompt("Please input minutes");
  alert(parseInt(minutes) % 60 + " minutes after");
}
// * use prompt to ask for the number of minutes after the midnight, use alert to show the ahours value shown on the clock now. e.g. 61 minutes passed => 1 hour on the clock
function showHours() {
  var minutes = parseInt(prompt("Please input minutes"));
  alert(Math.floor(minutes / 60) + " hour after");
}

// use prompt twice to ask for two numbers, use alert to display a bigger one
function showBigger() {
  var numOne = parseFloat(prompt("Please input first number"));
  var numTwo = parseFloat(prompt("Please input second number"));
  numOne > numTwo ? alert(numOne + " is bigger") : alert(numTwo + " is bigger");
}
// * use prompt to ask for an integer value, generate 3 random integers from 1 to entered number (inclusive) and display result with alert. use ', ' as a values separator. e.g.: input: 2, output: 1, 1, 2 (can differ in your case)
function generateRandom() {
  var maxRandom = parseInt(prompt("Please input INTEGER number"));
  var rezult = "= ";
  for (var i = 0; i < 100; i++)
    rezult = rezult + Math.round(Math.random() * (maxRandom - 1) + 1) + ", ";
  !isNaN(maxRandom) ? alert("Random number's from 1 to " + maxRandom + " " + rezult) : alert("Not a number has been entered");
}