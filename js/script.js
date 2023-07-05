//Seleção de elementos
const input = document.querySelector(".rangeInput input "),
  number = document.querySelector(".rangeInput .numberRange"),
  btnPassword = document.querySelector("#createPassword"),
  lowercaseBox = document.querySelector("#boxLowercase"),
  uppercaseBox = document.querySelector("#boxUppercase"),
  symbolBox = document.querySelector("#boxSymbols"),
  btnCopy = document.querySelector("#btnCopy"),
  cardContainer = document.querySelector(".card-container"),
  numberBox = document.querySelector("#boxNumbers");

//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//Carateres da senha
const upper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
const lower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const numbers = () => {
  return Math.floor(Math.random() * 10).toString();
};
const symbols = () => {
  const charSybols = "!@#$%&*()^~{}[];:/?<>+=";
  return charSybols[Math.floor(Math.random() * charSybols.length)];
};
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//Criando a senha
const generatePassword = (symbols, numbers, lower, upper) => {
  let password = "";

  const generators = [];

  if (symbolBox.checked) {
    generators.push(symbols);
  }
  if (lowercaseBox.checked) {
    generators.push(lower);
  }
  if (uppercaseBox.checked) {
    generators.push(upper);
  }
  if (numberBox.checked) {
    generators.push(numbers);
  }

  for (let i = 0; i < input.value; i = i + generators.length) {
    generators.forEach(() => {
      const randomChar = generators[
        Math.floor(Math.random() * generators.length)
      ]();
      password += randomChar;
    });
  }
  return password;
};
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//Gerar senha
btnPassword.addEventListener("click", () => {
  if (
    symbolBox.checked ||
    lowercaseBox.checked ||
    uppercaseBox.checked ||
    numberBox.checked
  ) {
    document.querySelector("#passwordInput").value = generatePassword(
      symbols,
      numbers,
      lower,
      upper
    );
    
    btnCopy.classList.add("fa-solid");
    btnCopy.classList.add("fa-copy");
  } else {
    alert("ERRO!! \n Selecione alguma opção para senha ser gerada!");
  }
});
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// Alterando o numero junto com o range
input.addEventListener("input", () => {
  number.innerText = input.value;
});
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// Copiar a senha
btnCopy.addEventListener("click", () => {
  navigator.clipboard
    .writeText(document.querySelector("#passwordInput").value)
    .then(() => {
      alert("Senha Copiada!");
    });
  btnCopy.classList.remove("fa-solid");
  btnCopy.classList.remove("fa-copy");
  document.querySelector("#passwordInput").style.color = "green";
  setTimeout(() => {
    document.querySelector("#passwordInput").value = "";
  }, 2000);
});
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
//
