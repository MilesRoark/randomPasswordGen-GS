const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("genBtn");
const copyButton = document.getElementById("copy");
const length = 18;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()~|{}[]<>/-=+";

const allChars = `${upperCase}${lowerCase}${symbols}${numbers}`;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

generateBtn.addEventListener("click", () => {
  createPassword();
});

passwordBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createPassword();
  }
});

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
}

copyButton.addEventListener("click", () => {
  copyPassword();
});
