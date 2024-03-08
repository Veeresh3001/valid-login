let firstNm = document.getElementById("firstNm");
let lastNm = document.getElementById("lastNm");

let email = document.getElementById("email");
let password = document.getElementById("password");

let loginForm = document.getElementById("loginForm");
let resetBtn = document.getElementById("resetBtn");

let errMsg = document.getElementById("err");
let popupEl = document.getElementById("popupEl");

let showPassword = document.getElementById("onShowPassword");
let autoSigningCheck = document.getElementById("autoSigningCheck");

let firstName = firstNm.value;
let lastName = lastNm.value;
let emailVal = email.value;
let passVal = password.value;
let errorMsg = "";

popupEl.classList.add("show-popup");

showPassword.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    showPassword.style.color = "red";
  } else {
    password.type = "password";
    showPassword.style.color = "black";
  }
});

firstNm.addEventListener("change", function (event) {
  firstName = event.target.value;
});

lastNm.addEventListener("change", function (event) {
  lastName = event.target.value;
});

email.addEventListener("change", function (event) {
  emailVal = event.target.value;
});

password.addEventListener("change", function (event) {
  passVal = event.target.value;
});

function checkDetails(emailVal, passVal) {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
  if (emailVal === "" || passVal === "") {
    return "* Enter Required Details";
  }
  if (!validEmail) {
    console.log(emailVal);
    return "Enter Valid Email !!";
  }
  const hasLowerCase = /[a-z]/.test(passVal);
  const hasUpperCase = /[A-Z]/.test(passVal);
  const hasNumber = /[0-9]/.test(passVal);

  if (passVal.length < 8) {
    return "Password mus be 8 Charactors";
  }
  if (!hasLowerCase || !hasUpperCase || !hasNumber) {
    return "Password must have one UpperCase, one lowerCase and one number digit.";
  }

  return "ok";
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let result = checkDetails(emailVal, passVal);
  // errMsg.textContent = result;
  if (result === "ok") {
    let userDetails = {
      firstName: firstName,
      lastName: lastName,
      email: emailVal,
      password: passVal,
    };
    if (autoSigningCheck.checked) {
      console.log(userDetails);
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
    loginForm.classList.add("blur");
    popupEl.classList.remove("show-popup");

    email.value = "";
    password.value = "";
    firstNm.value = "";
    lastNm.value = "";
    errMsg.textContent = "";
  } else {
    errMsg.textContent = result;
  }
});

resetBtn.addEventListener("click", () => {
  email.value = "";
  password.value = "";
  firstNm.value = "";
  lastNm.value = "";
  errMsg.textContent = "";
  autoSigningCheck.checked = false;
});

function closePopup() {
  loginForm.classList.remove("blur");
  popupEl.classList.add("show-popup");
  email.value = "";
  password.value = "";
  firstNm.value = "";
  lastNm.value = "";
  errMsg.textContent = "";
  autoSigningCheck.checked = false;
}
