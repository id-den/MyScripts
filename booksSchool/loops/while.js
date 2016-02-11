/**
 * while (condition) {
 *    body loop
 * }
 */

var i = 0;
console.log("while: ");
while (i < 3) {
    console.log(i);
    i++;
}

while (i) {
    console.log(i);
    i--;
}

/**
 * do {
 *   body loop
 * } while (condition);
 */
console.log("do while: ");
do {
    console.log(i);
    i++;
} while (i < 5);

/**
 * for (begin; condition; iteration) {
 *      body loop
 * }
 */
 var a;
console.log("for: ");
for (a = 0; a <= 10; a++) {
    console.log(a);
}

/**
 * break
 */

var sum = 0;

while (true) {
    var value = +prompt("Please input number:", '');
    if (!value) {
        break;
    }
    sum += value;
}
console.log(" Suma: " + sum);

/**
 * continue
 */

for (var f = 0; f < 10; f++) {
    if (i % 2) {
        console.log(f);
    }
}
console.log("continue: ");
for (var v = 0; v < 10; v++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(v);
}

var outer;
var suma = 0;
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
      var input = prompt("The value in the coordinates" + i + "," + "j", '');
      if (!input) {
          break outer;
      }
      suma += input;
  }
}
console.log("Done! - " + suma);