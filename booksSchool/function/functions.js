/**
 * function showMessage(name) {
 *      console.log("Hello, " + name);
 * }
 * showMessage(World) // Hello, World
 */

function showMessage (name) {
    console.log("Hello, " + name);
}

showMessage("World");

function myMessage () {
    var message = "Hello, I'm Roman";
    console.log(message);
}

myMessage();
// myMessage(message); error

function count () {
    for (var i = 0; i < 3; i++) {
        var j = i * 2;
    }
    console.log(i);
    console.log(j);
}

count();

var userName = "Den";

function indentityCard () {
    var message = "Hello, I'm " + userName;
    console.log(message);
}

indentityCard();
indentityCard(userName);


function textMessage (from, text) {
    from = "** " + from + " **";
    console.log(from + ":" + text);
}

textMessage("Lutsk", "UA");