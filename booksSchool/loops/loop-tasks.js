var i = 3;
console.log("Task 01: while");
while (i) {
    console.log(i--);
}
var i = 0;
console.log("Task 02: while");
console.log("Prefix variant: ");
while (++i < 5) {
    console.log(i);
}
console.log("Postfix variant: ");
var k = 0;
while (k++ < 5) {
    console.log(k);
}

console.log("Task 03: for");
console.log("Prefix variant: ");
for (var j = 0; j < 5; j++) {
    console.log(j);
}

console.log("Postfix variant: ");
for (var h = 0; h < 5; ++h) {
    console.log(h);
}

console.log("Task 04: ");
for (var s = 2; s < 10; s++) {
    if (s % 2 == 0) {
        console.log(i);
    }
}
console.log("Task 05: change for on while");
for (a = 0; a < 3; a++) {
    console.log("number " + a + "!");
}

var d = 0;
while (d < 3) {
    console.log("Number " + d + " !");
    d++;
}