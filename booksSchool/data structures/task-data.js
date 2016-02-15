// Task 01
console.log("Task 01");

//var num = +prompt("Pls, input first number", '');
//var num2= +prompt("Pls, input second number", '');
//
//var sum = num + num2;
//console.log( "The amount: " + sum );

console.log("Task 02");

console.log( 1.5.toFixed(0) );
console.log( 6.35.toFixed(2) );
console.log( 1.35.toFixed(1) );

console.log("Task 03");

var price = 0.10,
    price2 = 0.20;

var suma = price + price2;
console.log(suma);
console.log(suma.toFixed(2));

console.log("Task 05");

function getDecimal(number) {
  return number - Math.floor(number);
}

console.log(getDecimal(12.3));

function getDecimalNew(num) {
  return num > 0 ? num - Math.floor(num) : Math.ceil(num) - num;
}

console.log(getDecimalNew(45.25));