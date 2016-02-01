var e = "café" === "caf\u00e9";
console.log(e);

// First kind commentare in JS
/* Second kind commentare in JS */

var num = 12, // The number twelve
	num2 = 1.2, // The number one a two-tenths
	str = "hello world", // String text
	str2 = 'Hi', // Second string
 	boo = true, // Boolean type
	boo2 = false, // Second boolean type
	expr = /javascript/gi, // RegExp
	nul = null; // empty object

var obj = {x:1, y:2},
	arr = [1,2,3,4,5];

console.log(obj);
console.log(arr);

console.log(arr.length == obj.length);

console.log(" Reserved words: " + "\n" + "break" + " -  перериває виконання поточного циклу" + "\n" + 
	"case" + " - Випадок, який перевіряється на відповідність вираженню" + "\n" + 
	"catch" + " - приховати помилоки" + "\n" + 
	"continue" + " - припиняє виконання поточної ітерації циклу" + "\n" + 
	"debugger" + " - ключове слово зупиняє виконання JavaScript" + "\n" +
	"default" + " - Якщо жоден case не співпало - випконуєтьcя (якщо є) варіант default" + "\n" +
	"delete (delete expression)" + " - видаляє властивість з об'єкта" + "\n" +
	"do" + " - " + "\n" +
	"else (else { //body })" + " - або" + "\n" +
	"false" + " - неправда" + "\n" +
	"finally (finally_statements)" + " - буде виконаний після закінчення роботи try / catch" + "\n" +
	"for (i = 0; i < 10; i++) {} " + " - створює цикл, що складається з 3 необов'язкових виразів у круглих дужках, розділених крапкою з комою" + "\n" +
	"function (function function_name (argument) {// body...	})" + "створює функцію" + "\n" + 
	"if (if (condition) { //body })" + " - якщо" + "\n" + 
	"in " + " - повертає  true якщо властивість міститься в зазначеному об'єкті" + "\n" +
	"instanceof ()" + " - дозволяє перевірити, якому класу належить об'єкт" + "\n" +
	"new " + "створення обєктів" + "\n" + 
	"null " + " - утворює свій власний тип, що складається з одного цього значення" + "\n" + 
	"return" + " - для повернення значення" + "\n" + 
	"switch" + " - являє собою більш наочний спосіб порівняти вираз відразу з декількома варіантами." + "\n" + 
	"this" + " - для доступу до поточного об'єкту" + "\n" + 
	"throw" + " - генерує помилку." + "\n" + 
	"true" + " - істина" + "\n" +
	"try (try { //code } catch (err) { //error })" + " - для приховання помилок" + "\n" + 
	"typeof " + " - повертає тип аргументу" + "\n" + 
	"var" + " - створює зміну" + "\n" + 
	"void" + " -  обчислює передане вираз і повертає  undefined." + "\n" + 
	"while" + " - задає цикл, який виконується до тих пір, поки умова вірно" + "\n" +
	"with" + " - створює нову область видимості" + "\n");

console.log(" Reserved keywords: " + "\n" + 
	"class" + " - для оголошення класу " + "\n" + 
	"const" + " - створює нову іменовану константу, доступну тільки для читання." + "\n" + 
	"enum" + " - перераховує" + "\n" +
	"export" + " - для експортування функцій, обєктів т.п." + "\n" + 
	"extends (class ChildClass extends ParentClass { ... })" + " - виконується для створення child класу з іншим класом" + "\n" +
	"import (import myModule from  'my-module.js';)" + " - використовується для імпорту функцій (методів), що експортуються з зовнішнього модуля, іншого скрипта." + "\n" +
	"super" + " - використовується для виклику функцій на об'єкт батьків." + "\n");
console.log(" Words reserved in strict mode: " + "\n" +
	"implements" + " - " + "\n" +
	"let (let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];)" + " - " + "\n" +
	"" + "" + "\n" +
	"" + "" + "\n" +
	"" + "" + "\n" +
	"" + "" + "\n" +
	"" + "" + "\n" +
	"" + "" + "\n" +
	"" + "" + "\n");