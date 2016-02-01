/* ===== Lesson 2 - Statement - інструкція ===== */
/*Operators : Unary, Binary, Ternary*/

//Js words: break, delete, case, do, catch, else, continue, false, debugger, finally, default, for,
//function, return, typeof, if switch, var, in, this, void, instanceof, throw, while, new, true, with,
//null, try, class, const, enum, export, extends, import, super, implements, let, privat, public, yield, 
//interface, package, protected, static.


/* ===== Lesson 3 - Variable - вираз ===== */
//Variable: var Name = initilisations
var myVariable = 20,
	myAnotherVariable = 30;

/* ===== Lesson 4 - Types Data and variables ===== */
//Types Data - primitive, object

//Primitive types
var myNumber = 12,
	myString = "Some string", // "" or ''
	myBoolean = true, // true or false
	myNull = null,
	myUndefined = undefined;

console.log("Primitive types:");
console.log(myNumber , myString , myBoolean , myNull, myUndefined);
console.log(typeof myNumber + " " +  typeof myString + " " + typeof myBoolean + " " + typeof myNull + " " + myUndefined);
console.log(myString.toUpperCase()); //Up register

//Object types
var obj = {name: "js"},
	array = ["JS", "CasperJS", "Kali Linux"],
	regexp = /w+/g,
	func = function (){};

console.log("Object types: ");
console.log(typeof obj);
console.log(typeof array);
console.log(typeof regexp);
console.log(typeof func);


//Types: Primitive - immutable, Object - mutable

obj.name = "jS";
array[2] = "Programs of Kali Linux";

console.log(obj);
console.log(array);

var a, b, c, d;

a = b = c = d = 10;
console.log(a);

a += b += c += d += 10;
console.log(a, b, c, d);

/* ===== Lesson 5 - Number ===== */
console.log("Type \"Number:\"");
console.log(5);
console.log(0);
console.log(300000);
console.log("16 bit: " + 0x12f);
console.log("8 bit: " + 0345); 
console.log("10 bit: " + 01238);

console.log(1.25);
console.log(.78);
console.log(1.5e2);

//Types Number - Methods: 
var N = new Number(300),
	n = 4;

console.log(typeof N);
console.log(typeof n);
console.log(N.toFixed(2)); // quantity 0 after dot
console.log(n.toFixed(3));
console.log(10 .toFixed(-1) + "k");
console.log(4.6.toPrecision(1) + "k");
console.log(N.toExponential(3));

//Unary operators 
console.log("Unary operators");
console.log(-n);
console.log(+n);

console.log("increment: ");
console.log(++n);
console.log("++n: " + n);
console.log(n++);
console.log("n++: " + n);
console.log("decrement: ");
console.log(n--);
console.log("n--: " + n);
console.log(--n);
console.log("--n: " + n);

//Binary operators
console.log("Binary operators");
console.log(3 + 5);
console.log(4 - 4);
console.log(5 * 5);
console.log(6 / 6);
console.log(33 % 5);

console.log(n += n);
console.log(n -= n);
console.log(n /= n);
console.log(n *= n);
console.log(n %= n);

//Relational opertors
console.log("Relational opertors");
console.log(4 < 6);
console.log(6 > 7);
console.log(7 <= 4);
console.log(7 >= 4);
console.log(3 <= 3);
console.log(6 == "6"); //true
console.log(6 === "6"); //false
console.log(5 !== 4); 

console.log(Math.sqrt(34).toPrecision(3));
console.log(Math.pow(3, 6));
console.log(Math.PI.toPrecision(4));
console.log(Math.E);
console.log(1e+309); //Infinity


/*Lesson 6 - String*/
console.log("Type String:");
console.log("My String");
console.log('Your String');

console.log('They "long" String');
console.log("Our 'big' String");

console.log("\"Escaping\" His String"); //Escaping - екранування

console.log("Lorem ipsum".length);
console.log("Frontend - HTML, \
	CSS, \
	JavaScript".length);

console.log("Frontend: \n 1.HTML, \n 2.CSS, \n 3.JavaScript."); // \n - new line
console.log("Frontend: \n\t HTML, CSS, JavaScript. \nBackend: \n\t Node.js"); // \t - tabulation
console.log("apple \\ orange"); // \\ = \
console.log("pune" + "apple"); // + 

var string = "Sometimes the same is different";
console.log(string.charAt(0)); //index word in string
console.log(string.length); // quantity symbols in string
console.log(string.charAt(string.length -1)); // end symbols
console.log(string.substring(9)); // from start str
console.log(string.substring(10, 18)); // start str and end str
console.log(string.slice(-9)); // count symbols from end string
console.log(string.substr(14, 4)); //count symbols from start, quantity symbols
console.log(string.indexOf("o")); //search - from start str
console.log(string.lastIndexOf("e")); // search - from end str
console.log(string.replace("is", "\"isn't\""));
console.log(string);
console.log(string = string.replace("is", "\"isn't\""));
console.log(string);
console.log(string.split(" "));
console.log(string.split(""));
console.log(string.toUpperCase());
console.log(string.toLowerCase());

/* Lesson 7 - Boolean */
console.log("Type Boolean:");
console.log(true);
console.log(false);

console.log(Boolean(10));

console.log("falsy values:" + "\n\t" + "undefined: " + Boolean(undefined) + "\n\t" + "null: " + Boolean(null) + "\n\t" + "0: " + Boolean(0) + "\n\t" + "NaN: " + Boolean(NaN) + "\n\t" + "\"\": " + Boolean(""));

var s = "text";

if (s) {
	console.log("its true");
}
else {
	console.log("its false");
}

//Logical 
console.log("true && false - " + (true && false)); //false because "&&" - true && true or false && false 
console.log("true && true - " + (true && true));

console.log("true || false - " + (true || false)); //Pipe
console.log("false || false - " + (false || false));
console.log("false || true - " + (false || true));

console.log("!true - " + !true);
console.log("!false - " + !false);

var a = 0,
	b = 0,
	isTrue = true,
	isFalse = false;

isTrue && (a = 5);
isFalse && (b = a);

console.log(a);
console.log(b);

var someString = "";
var newString = someString || "Default string";

console.log(newString);

/* Lesson 8 - null & undefined*/
// Null and undefined - empty value
console.log("type null - " + typeof null);
console.log("type undefined - " + typeof undefined);

var temp;
var myObj = {};
var arr = [1, 2, 3, 4];

function greet (name) {
	return "Hello " + name;
}

console.log(temp);
console.log(myObj.property);
console.log(arr[4]);
console.log(greet("World"));

console.log(null == undefined);
console.log(null === undefined);

/* Lesson 9 - conversions type */
console.log("5" + 5);
console.log(typeof("5" + 5));

console.log("5" * 5);
console.log(typeof("5" * 5));

console.log("5" * "hi");
console.log(typeof("5" * "hi"));

console.log("5" == 5);
console.log("0" == false);
console.log(0 == false);
console.log("5" == true);
console.log("" == false);

console.log(null == false);
console.log(null == true);
console.log(undefined == false);
console.log(undefined == true);

console.log(undefined == null);

//Explicit conversions
console.log(Number("55"));
console.log(typeof (Number("55")));

console.log(String(123));
console.log(typeof(String(123)));

console.log(Boolean(1));
console.log(typeof(Boolean(1)));
console.log(Boolean(0));
console.log(!!5);
console.log(typeof(!!5));
console.log(!!0);

console.log(typeof(5 + ""));
console.log(typeof(+ "5"));

var number = 34;
console.log(typeof number.toString() + ": " + number);
console.log(number.toString(2));

console.log(parseInt("43 %"));
console.log(parseInt("34", 16));
console.log(parseFloat("15.58 em"));

console.log(typeof String(Infinity));
console.log(typeof String(NaN));
console.log(+"");

console.log("falsy values - ");
console.log("!!\"\": " + !!"");
console.log("!!NaN: " + !!NaN);
console.log("!!0: " + !!0);
console.log("!!: " + !!null);
console.log("!!undefined: " + !!undefined);

console.log(!!"Hi");
console.log(+"   4");
console.log(parseInt("4 px"));

console.log(+true);
console.log(+false);

var newN = 3;

console.log(newN.value);

/* Lesson 10 - If else */
//if () instruction

if (true) {
	console.log(true);
};

if (false) {
	console.log(false);
};


var num = 6;

if (num >= 6) {
	console.log("Its true");
} else {
	console.log("Its false");
}

var name = "JavaScript",
	otherName;

if (name === "Java") {
	otherName = "Ruby";
} else if (name === "JavaScript") {
	otherName = "EcmaScript";
} else if (name === "Php") {
	otherName = "Swift"
}

console.log(otherName);


//Switch (вираз) { 
//case вираз: instruction; break;
//case вираз: instruction; break;
//default: instruction 
//}

switch (name) {
	case "Java": otherName = "Ruby"; break;
	case "JavaScript": otherName = "EcmaScript"; break;
	case "Php": otherName = "Swift";
	default: otherName = "The name doesn't exist";
}

console.log(otherName);

/* Lesson 11 - */

//вираз1 ? вираз2 : вираз3
// Exapmle 1: 
var x = 9;
	text = x > 10 ? "x more ten" : "x less or = ten";
console.log(text);

// Exapmle 2: 
var text = x > 10 ? "x more ten" : x < 10 ? "x less ten" : "x = ten";
console.log(text);

// Example 3: 
if (x > 10) {
	text = "x more ten";
} else if (x < 10) {
	text = "x less ten";
} else {
	text = "x = ten";
}

console.log(text);

//вираз, вираз 
var test = (15, 20);
console.log((test, "Hi"));

/* Lesson 12 - Loops*/
// for (inicilisation; умова; increment) { body loop }
console.log("for");
var i;
for (i = 0; i <= 10; i++) {
	console.log(i);
}

// while (вираз) instruction
console.log("while");
var w = 10;

while (w--) {
	console.log(w);
}

// do instruction while (вираз)
console.log("do while");
var d = 0;

do console.log(d++); while (d < 10)

/* Lesson 13 - Function */
//function function_name (argument) {
	// body...
//}

// function declaration statement
function myFun (myArg) {
	return "My" + myArg;
}

console.log(myFun(" Script").toLowerCase());

// function definition expression
var Fun = function (arg) {
	return arg;
};

console.log(Fun("js").toUpperCase());

var funcArg = function (moreArg) {
	console.log(arguments);
	return "Arguments plus " + moreArg;
}; 

console.log(funcArg("My Arg", "Your Arg", "His Arg", "Her Arg").length);

var func = function (callback) {
	var myNick = "Den";
	callback(myNick);
}

func(function (n) {
	console.log("Hello " + n);
});

var funct = function () {
	return function () {
		console.log("Hi (**)");
	}
};

funct()();

//self-invoking anonymous function
var greeting = (function (name) {
	return "Hi " + name;	
}("Sorax"));

console.log(greeting);

/* Lesson 14 - Scope & Scope chain */

var q = 10;

var newFun = function () {
	var q = 15;
	console.log("q: " + q);
}

console.log(newFun(10));
console.log("q: " + q);

var w = 1;

var newFunc = function () {
	var w = 10;
	console.log("w: " + w);

	var innerFun = function () {
		var w = 15;
		console.log("innerFun: " + w);
	}
	innerFun();
	console.log("w: " + w);
};
newFunc();

var test = function (name) {
	var name = 3 + name;
	return name;
};

console.log(test(2));


// Lesson 15: Closures
