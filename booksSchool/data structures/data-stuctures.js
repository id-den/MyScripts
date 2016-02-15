// length
console.log("Hello, World!".length);

var str = "Hello, Den :)";
console.log(str.length);

// to.UpperCase();
console.log(str.toUpperCase());
console.log(str.toUpperCase );

// toFixed();
var n = 12.587;
console.log(n.toFixed(2));
console.log(n.toFixed(0));
console.log(n.toFixed(5));

/**
 * Numbers
 */

// hexadecimal system
console.log( 0xFF );

// octal
console.log( 010 + " hours" );
console.log( 1e3 + "$" );
console.log( 3e5 );
console.log( 3e-5 );

// Infinity
console.log( 1/0 );
console.log( 12345/0 );
console.log( Infinity > 9999 );
console.log( Infinity + 1 == Infinity );
console.log( 1e500 );

// NaN - Not-a-Number
console.log( 0/0 );
if (NaN == NaN) {
  console.log( "==" );
}

var zero = 0/0;
console.log(isNaN(zero));
console.log(isNaN(10));
console.log(isNaN("10"));

if (zero !== zero) {
  console.log( 'zero == NaN' );
}

// isFinite();
//var value = prompt("Please input Infinity", 'Infinity');
//var number = +value;
//console.log(number);
//
//console.log(isFinite(number));
console.log(isFinite(10));
console.log(isFinite(NaN));

// Conversion to number
var s = "5.23";
console.log( +s );
console.log( +"4test" );

console.log(+" -23");
console.log("34" / s);

// parseInt & parseFloat
console.log(parseInt('8pt'));
console.log(parseFloat('12.25.5'));

// Check on number
//var x = prompt("Pls, input value", "-45.25");
//
//if (isNaN(x)) {
//  console.log("String converted in NaN. Number not");
//} else {
//  console.log("Number");
//}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

console.log(isNumeric(10));

// toString
var num = 255;
console.log( num.toString(16) );
console.log(num.toString(2));
num = 1234567890;
console.log(num.toString(36));

/**
 * Rounding
 * three functions:
 * Math.floor - rounding down,
 * Math.ceil - rounding up,
 * Math.round - rounding to the nearest whole,
 */

console.log(Math.floor(3.1));
console.log(Math.ceil(3.1));
console.log(Math.round(3.1));

/**
 * Trigonometry
 */

x = 15;
y = 12;

console.log(Math.acos(x));
console.log(Math.asin(x));
console.log(Math.atan(x));
console.log(Math.atan2(x, y));
console.log(Math.sin(x));
console.log(Math.cos(y));
console.log(Math.tan(y));

/**
 * General purpose functions
 */
var a = 3.4;

console.log(Math.sqrt(a));
console.log(Math.log(a));
console.log(Math.pow(a, y));
console.log(Math.abs(a));
console.log(Math.exp(a));
console.log(Math.max(x, y, a));
console.log(Math.min(x, y, a));
console.log(Math.random());

// Formatting
var numbers = 154643218;
console.log( numbers.toLocaleString() );



