//var message;
var login = prompt("What are your names?", "");
//
//if (login == "Artem") {
//    console.log(message = "Hi!");
//} else if (login == "Den") {
//    console.log(message = "Hello");
//} else if (login == " ") {
//    console.log(message = "Not login");
//} else {
//    console.log(message = " ");
//}


var message = (login == "Artem") ? "Hi!" :
    (login == "Den") ? "Hello!" :
        (login == "") ? "Not login!" :
            (login == null) ? "Wrong!!!" :
                " ";

console.log(message);