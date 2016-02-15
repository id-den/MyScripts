console.log("Home Tasks: ");
console.log(null || 2 || undefined);
console.log(console.log(1) || 2 || console.log(3));
console.log(1 && null && 2);
console.log(console.log(1) && console.log(2));
console.log(null || 2 && 3 || 4);

//var age = prompt("How old are you?", "");
//if (age >= 14 && age <= 90 ) {
//    console.log(age);
//}
//
//if (age < 14 || age > 90) {
//    console.log(age);
//}

if (-1 || 0) {
    console.log("first");
}
if (-1 && 0) {
    console.log("second");
}
if (null || -1 && 1) {
    console.log("third");
}
