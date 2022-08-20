$(document).ready(function () {
// display login form
$(".forms:nth-child(1)").css("display", "block");
// Changes placeholder of phone number input
$("#phone-num").focus(function () {
$(this).attr("placeholder", "Format: 123-456-7890");
});
$("#phone-num").blur(function () {
$(this).attr("placeholder", " ");
});
// Label from input, it stays above when there is text
var formRegister = document.getElementsByClassName("form-input");
for (var i = 0; i < formRegister.length; i++) {
formRegister[i].addEventListener("blur", function () {
if (this.value.length >= 1) {
this.nextElementSibling.classList.add("active");
this.nextElementSibling.classList.remove("error");
} else {
this.nextElementSibling.classList.remove("active");
this.nextElementSibling.classList.add("error");
}
});
}
// transition between forms
$(".alt-form").click(function () {
$(".forms").animate(
{
height: "toggle",
opacity: "toggle",
},
600
);
});
/* ===================== Login form =====================*/
// Validate login Email
$("#email-check").hide();
let emailError = true;
$("#email").keyup(function () {
validateEmail();
});
function validateEmail() {
let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,3}$/;
let EmailValue = $("#email").val();
if (EmailValue.length == 0) {
$("#email-check").show();
emailError = false;
} else if (regex.test(EmailValue)) {
$("#email-check").hide();
emailError = true;
} else {
$("#email-check").show();
$("#email-check").html("**Valid format: name@company.com");
emailError = false;
}
}
// Validate login Password
$("#password-check").hide();
let PasswordError = true;
$("#password").keyup(function () {
validatePassword();
});
function validatePassword() {
let passValue = $("#password").val();
if (passValue.length == 0) {
$("#password-check").show();
PasswordError = false;
} else if (passValue.length < 3 || passValue.length > 10) {
$("#password-check").show();
$("#password-check").html("**Must be from 3 to 10 characters");
PasswordError = false;
} else {
$("#password-check").hide();
PasswordError = true;
}
}
// login Submit button
$("#submit-login").click(function () {
validateEmail();
validatePassword();
if (
emailError == true &&
PasswordError == true
) {
$("#form1").submit();
} else {
return false;
}
});
/* ===================== Registration form =====================*/
// Validate username
$("#usr-check").hide();
let usernameError = true;
$("#username").keyup(function () {
validateUsername();
});
function validateUsername() {
let usernameValue = $("#username").val();
if (usernameValue.length == 0) {
$("#usr-check").show();
usernameError = false;
} else if (usernameValue.length < 3 || usernameValue.length > 10) {
$("#usr-check").show();
$("#usr-check").html("**Username must have 3 to 10 chars");
usernameError = false;
} else {
$("#usr-check").hide();
usernameError = true;
}
}
//Validate first name
$("#name-check").hide();
let firstNameError = true;
$("#first-name").keyup(function () {
validateFirstName();
});
function validateFirstName() {
let firstNameValue = $("#first-name").val();
if (firstNameValue.length == 0) {
$("#name-check").show();
firstNameError = false;
} else if (firstNameValue.length > 10) {
$("#name-check").show();
$("#name-check").html("**Must be from 1 to 10 characters");
firstNameError = false;
} else {
$("#name-check").hide();
firstNameError = true;
}
}
//Validate last name
$("#last-name-check").hide();
let lastNameError = true;
$("#last-name").keyup(function () {
validateLastName();
});
function validateLastName() {
let lastNameValue = $("#last-name").val();
if (lastNameValue.length == 0) {
$("#last-name-check").show();
lastNameError = false;
} else if (lastNameValue.length > 10) {
$("#last-name-check").show();
$("#last-name-check").html("**Must be from 1 to 10 characters");
lastNameError = false;
} else {
$("#last-name-check").hide();
lastNameError = true;
}
}
// Validate Phone
$("#phone-check").hide();
let phoneError = true;
$("#phone-num").keyup(function () {
validatePhone();
});
function validatePhone() {
//let regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
let regex = /([0-9]{3})([-])([0-9]{3})\2([0-9]{4})/;
let phoneValue = $("#phone-num").val();
if (phoneValue.length == 0) {
$("#phone-check").show();
phoneError = false;
} else if (regex.test(phoneValue)) {
$("#phone-check").hide();
phoneError = true;
} else {
$("#phone-check").show();
$("#phone-check").html("**Valid format: 123-456-7890");
phoneError = false;
}
}
// Validate registration Email
$("#reg-email-check").hide();
let emailRegError = true;
$("#reg-email").keyup(function () {
validateRegEmail();
});
function validateRegEmail() {
let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,3}$/;
let regEmailValue = $("#reg-email").val();
if (regEmailValue.length == 0) {
$("#reg-email-check").show();
emailRegError = false;
} else if (regex.test(regEmailValue)) {
$("#reg-email-check").hide();
emailRegError = true;
} else {
$("#reg-email-check").show();
$("#reg-email-check").html("**Valid format: name@company.com");
emailRegError = false;
}
}
// Validate Registration Password
$("#pass-check").hide();
let regPasswordError = true;
$("#reg-pass").keyup(function () {
validateRegPassword();
});
function validateRegPassword() {
let passValue = $("#reg-pass").val();
if (passValue.length == 0) {
$("#pass-check").show();
regPasswordError = false;
} else if (passValue.length < 3 || passValue.length > 10) {
$("#pass-check").show();
$("#pass-check").html("**Must be from 3 to 10 characters");
regPasswordError = false;
} else {
$("#pass-check").hide();
regPasswordError = true;
}
}
// Validate Confirm Password
$("#re-pass-check").hide();
let repeatPasswordError = true;
$("#re-pass").keyup(function () {
validateRepeatPassword();
});
function validateRepeatPassword() {
let repeatPasswordValue = $("#re-pass").val();
let passwordValue = $("#reg-pass").val();
if (repeatPasswordValue.length == 0) {
$("#re-pass-check").show();
repeatPasswordError = false;
} else if (passwordValue != repeatPasswordValue) {
$("#re-pass-check").show();
$("#re-pass-check").html("**Password does not Match");
repeatPasswordError = false;
} else {
$("#re-pass-check").hide();
repeatPasswordError = true;
}
}
// register now Submit button
$("#submit-reg").click(function () {
validateUsername();
validateFirstName();
validateLastName();
validatePhone();
validateRegEmail();
validateRegPassword();
validateRepeatPassword();
if (
usernameError == true &&
firstNameError == true &&
lastNameError == true &&
emailRegError == true &&
phoneError == true &&
regPasswordError == true &&
repeatPasswordError == true
) {
$("#form2").submit();
} else {
return false;
}
});
// end of submit button
});