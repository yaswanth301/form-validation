const password = document.getElementById("password");
const passwordcnfrm = document.getElementById("confirm password");
const form = document.querySelector(".appli");
const msgCont = document.querySelector(".msg_container");
let msg = document.querySelector(".message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  isValid = form.checkValidity();
  if (!isValid) {
    msg.textContent = "fill the data";
    msg.style.color = "red";
    msgCont.style.bordercolor = "red";
  }
  if (password.value === passwordcnfrm.value) {
    passwordMatch = true;
    password.style.borderColor = "green";
    passwordcnfrm.style.borderColor = "green";
  } else {
    passwordMatch = false;
    msg.textContent = "make sure password match";
    msg.style.color = "red";
    msgCont.style.bordercolor = "red";
    password.style.borderColor = "red";
    passwordcnfrm.style.borderColor = "red";
  }
  if (isValid && passwordMatch) {
    msg.textContent = "sucessfully Registerd";
    msg.style.color = "green";
    msgCont.style.bordercolor = "green";
    password.style.borderColor = "green";
    passwordcnfrm.style.borderColor = "green";
  }
}

function userData() {
  let user = {
    name: form.name.value,
    mail: form.mail.value,
    comment: form.comment.value,
    phoneNum: form.phoneNum.value,
    password: form.password.value,
    confirm_password: form.confirm_password.value,
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
  if (isValid && passwordMatch) {
    userData();
  }
}

form.addEventListener("submit", processFormData);
