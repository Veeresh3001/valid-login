let firstNm = document.getElementById("firstNm");
let lastNm = document.getElementById("lastNm");
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginForm = document.getElementById("loginForm");
let errMsg = document.getElementById("err");
let resetBtn = document.getElementById("resetBtn");
let popupEl = document.getElementById("popupEl");

popupEl.classList.add("show-popup");

let icon = document.getElementById("onclickIcon");
icon.addEventListener("click", () => {
  alert("It's just visible icon for this website!!");
});

let emailVal = "";
let passVal = "";
let errorMsg = "";

email.addEventListener("change", function () {
  emailVal = email.value;
});

password.addEventListener("change", function () {
  passVal = password.value;
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
    errMsg.textContent = "";
    loginForm.classList.add("blur");
    popupEl.classList.remove("show-popup");
  } else {
    errMsg.textContent = result;
  }
});

resetBtn.addEventListener("click", () => {
  email.value = "";
  password.value = "";
  firstNm.value = "";
  lastNm.value = "";
});

function closePopup() {
  loginForm.classList.remove("blur");
  popupEl.classList.add("show-popup");
  email.value = "";
  password.value = "";
  firstNm.value = "";
  lastNm.value = "";
}
