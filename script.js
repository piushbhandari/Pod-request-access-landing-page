const subBtn = document.querySelector(".main__submitbtn");
const inp = document.querySelector(".input");
const errMsg = document.querySelector(".main__error-msg");

subBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inp.value.length === 0) {
    errMsg.style.display = "block";
    errMsg.textContent = "cannot be empty...";
  } else if (!validRegex.test(inp.value)) {
    errMsg.style.display = "block";
    errMsg.textContent = "invalid email";
  } else {
    errMsg.style.display = "none";
  }
});
