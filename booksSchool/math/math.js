console.log(Math.pow(2,53));  //
console.log(Math.round(0.7));
console.log(Math.ceil(0.3));
console.log(Math.floor(0.10));
console.log(Math.abs(-3));

var x = 10,
    y = 4,
    z = 5;

console.log(Math.max(x,y,z));
console.log(Math.min(x,y,z));

console.log(Math.random());

console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(3));
console.log(Math.pow(30, 1/3));

console.log(Math.sin(10));
console.log(Math.cos(5));
console.log(Math.atan(30));

//
console.log(Math.log(10));
console.log(Math.log(100)/Math.LN10);
console.log(Math.log(512)/Math.LN2);
console.log(Math.exp(3));

// Infinity
console.log(Infinity);
console.log(Number.POSITIVE_INFINITY);
console.log(1/0);

// -Infinity
console.log(Number.MAX_VALUE + 1);
console.log(Number.NEGATIVE_INFINITY);
console.log(-Infinity);
console.log(-1/0);
console.log(-Number.MAX_VALUE - 1);

// NaN - not a number
console.log(NaN);
console.log(Number.NaN);
console.log(0/0);

// 0
console.log(Number.MIN_VALUE/2);

// -0
console.log(-Number.MIN_VALUE/2);
console.log(-1/Infinity);
console.log(-0);

// false
console.log(x == NaN);
console.log(x != x);
console.log(isNaN(y));

var a = "Hello";
console.log(isNaN(a));
console.log(isFinite(a));

var zero = 0;
var negz = -0;

console.log(zero === negz);
console.log(1/zero === 1/negz);

var x2 = .3 - .2;
console.log(x2);

var y2 = .2 - .1;
console.log(y2);

console.log(x2 == y2);
console.log(x2 == .1);
console.log(y2 == .1);

