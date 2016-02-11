/**
 *  || (or)
 */
var a = 0,
    b = 4;

var result = a || b;
console.log(result);

console.log("(false || true) = " + false || true); // true
console.log("(true || false) = " + true || false); // true
console.log("(true || true) = " + true || true); // true
console.log("(false || false) = " + false || false); // false

if (1 || 0) {
    console.log("Right");
}

var hour = 9,
    isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log("Office to 10 o'clock or after 18 o'clock or on weekend closed");
}

var x;
if (true || (x = 1)) {
    console.log(x);
}

if (false || (x = 1)) {
    console.log(x);
}

console.log("(1 || 0) = " + 1 || 0);
console.log("(true || \"it doesn't matter these\") = " + true || "it doesn't matter these");
console.log("(null || 1) = " + null || 1);
console.log("(undefined || 0) = " + undefined || 0);

var undef;
var zero = 0;
var emptyStr = "";
var msg = "Hello!";

var result = undef || zero || emptyStr || msg || 0;
console.log(result);

/**
 * && (and)
 */

console.log("(result = a && b) = " + (result = a && b));
console.log("(true && false) = " + (true && false));
console.log("(true && true) = " + (true && true));
console.log("(false && true) = " + (false && true));
console.log("false && false = " + (false && false));

var hours = 12,
    minutes = 30;

if (hours == 12 && minutes == 30) {
    console.log(hours + ":" + minutes);
}

var test = (4 || 1) * (1 && 0);
console.log(test);

test = 4 || 1 && 0;
console.log(test);

/**
 * ! (not)
 */
var value;
var result = !value;
console.log(result);

console.log("!true = " + !true);
console.log("!0 = " + !0);
console.log("!!\"string\" = " + !!"string");