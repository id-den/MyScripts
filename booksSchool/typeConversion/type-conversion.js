/**
 * Types conversion:
 * - string conversion;
 * - number conversion;
 * - logical conversion.
 */

var a = true;
console.log(a);

console.log(String(null) === "null");

console.log(true + " test");
console.log("123 " + undefined);

var b = +"123";
var c = Number("123");

console.log(typeof b, c);

console.log(+true + " +true");
console.log(+false + " +false");

var d = "10";
console.log(Boolean(d));

console.log("" + 1 + 0 + "" +  - 1 + 0);