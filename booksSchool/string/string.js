var p = "π";
var e = "e";

console.log(p.length);
console.log(e.length);
console.log("\u03c0");
console.log("JavaScript escape sequences: " + '\n' + "\0" + " - Symbol NUL'\u0000'");
console.log('\b' + " - The slaughter (\u0008)");
console.log('\t' + " - horizontal tabulation (\u0009)");
console.log('\n' + " - break line (\u000A)");
console.log('\v' + " - vertical tabulation (\u000B)");
console.log('\f' + " - break page (\u000C)");
console.log('\r' + " - carriage return (\u000D)");
console.log('\"' + " - double quotes (\u0022)");
console.log('\'' + " - one quote (\u0027)");
console.log('\\' + " - backslash (\u005C)");

// Work with String
var s = "lorem, ipsum";

console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(s.length-1));

console.log(s.substring(1,4));
console.log(s.slice(1,4));
console.log(s.slice(-3));
console.log(s.slice(3,-2));
console.log(s.indexOf("m", 3));
console.log(s.lastIndexOf("l"));
console.log(s.split(", "));
console.log(s.replace("l", "L"));
console.log(s.toUpperCase());

console.log(s[0]);
console.log(s[s.length-1]);

console.log("".charAt(0));
console.log("" [0]);

var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
var target = "ma";

var pos = 0;

while (true) {
  var foundPos = str.indexOf(target, pos);
  if (foundPos == -1) {
    break;
  }
  console.log( foundPos );
  pos = foundPos + 1;
}

console.log(str.length);