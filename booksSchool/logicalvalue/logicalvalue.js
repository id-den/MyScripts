var a = 3;
var b = 5;

if (a === 4) {
    b = b + 1;
    console.log(b);
}
else {
    a = a + 1;
    console.log(a);
}

var o = 5;

if (o !== null) {
    console.log(o);
}
else {
    console.log(o = null);
}


var x = 0;
var y = 2;
var z = -20;

if ((x === 0 && y === 0) || !(z == 0)) {
    console.log("x and y = 0 or z doesn't = 0");
}

// var years = prompt("How old are you?", "");

// if (years < 10) {
// 	alert("You baby");
// }
// else if (years <= 20) {
// 	alert("You boy");
// }
// else {
// 	alert("You Man");
// }

// var year = prompt("Please, input year to appear standard ECMA-262 5.1", "");

// if (year == 2011) {
// 	console.log("Yes, it's true");
// }
// else {
// 	console.log("No, it's false");
// }

// // condition ? value 1 : value 2
// var access;

// var age = prompt("How old is she?");

// access = (age > 14) ? true : false;
// console.log(access);

// var age = prompt("age?", 18);

// var message = (age < 3) ? "Hello, baby!" : 
// 	(age < 18) ? "Hi!" : 
// 	(age < 100) ? "Good morning!" : 
// 	"Wonderful age!";
// alert(message);

// var question = prompt("What is official the name  JavaScript?", "");

// if (question == "EcmaScript") {
// 	console.log("Your answer correct");
// }
// else {
// 	console.log("Your answer wrong");
// }

// var num = prompt("Please, input number?", "");

// if (num == 1) {
// 	alert("1");
// } 
// else if (num == -1) {
// 	alert(-1);
// } 
// else {
// 	alert(0);
// }

// var userName = prompt("Are you login?", "");

// if (userName == "admin") {
// 	var pass = prompt("Are you password`?", "");
// 	if (pass == "1") {
// 		alert("Welcome, admin! :)");
// 	} else if (pass == null) {
// 		alert("Entry cancelled");
// 	}
// 	else {
// 		alert("Password wrong! :(");
// 	}
// } else if (pass == null) {
// 	alert("Entry cancelled");
// }
// else {
// 	alert("I don't you know :(");
// }

var a = prompt("Please input value for a - ", "");
var b = prompt("Please input value for b - ", "");

if (a + b < 4) {
	console.log( a, b + " little");
}
else {
	console.log(a, b + " A lot");
}

var result;

result = (a + b < 4) ? "little" : "A lot";
console.log(result);