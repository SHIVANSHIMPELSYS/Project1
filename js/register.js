function fun1(e) {

e.preventDefault();
var name = document.getElementById("name").value;
var ncontains = /^[a-zA-Z]+$/;
if (!ncontains.test(name)) {
alert("Name should only contain alphabets");
return false;
}

var pass = document.getElementById("password").value;
var pcontains = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
if (!pcontains.test(pass)) {
alert("Password should be more than 9 characters, contain at least one uppercase letter, one lowercase letter, one special character, and one digit");
return false;
}

var email = document.getElementById("email").value;
var econtains = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!econtains.test(email)) {
alert("Invalid email address");
return false;
}

// If all validations pass, submit the form
return true;
}