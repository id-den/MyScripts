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