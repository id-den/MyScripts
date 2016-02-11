var global = this;
console.log(global);

var s = "hello world!";
var word = s.substring(s.indexOf(" ")+1, s.length);
console.log(word);

var newS = new String(s);
console.log(newS);

var s = "test";
s.len = 4;
var t = s.len;
console.log(t);
console.log(new String(t));

var s = "text",
    n = 1,
    b = true;
var S = new String(s);
var N = new Number(n);
var B = new Boolean(b);
console.log(typeof (S) +'\n'+ typeof (N) +'\n'+ typeof (B));

var text = "hello";
console.log(text.toUpperCase());
console.log(text);

var o = {x:1};
o.x = 2;
o.y = 3;

var a = [1,2,3];
a[0] = 0;
a[3] = 4;

console.log(o);
console.log(a);