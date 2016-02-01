var then = new Date(2016, 1, 1);
console.log(then);

var later = new Date(2016, 0, 31, 16, 30);
console.log(later);

var now = new Date();
console.log(now);

var elapsed = now - then;
console.log(elapsed);

console.log(later.getFullYear());
console.log(later.getMonth());
console.log(later.getDate());
console.log(later.getHours());
console.log(later.getUTCHours());
console.log(later.toString());
console.log(now.toUTCString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toISOString());