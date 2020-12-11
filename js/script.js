var password;
var firstName=prompt("Whats your first name?");
var lastName=prompt("Whats your last name?");
var color=prompt("Whats your favoure color?");
password = firstName + lastName + color;

document.getElementById("password").innerHTML = "Your Fake Passowrd is: " + password + "420";