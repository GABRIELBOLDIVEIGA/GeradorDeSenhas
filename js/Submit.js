let $Id = document.getElementById.bind(document);

$Id("btnGerar").addEventListener("click", function () {
  var upper = $Id("maiuscula");
  var lower = $Id("minuscula");
  var number = $Id("numeros");
  var symbol = $Id("simbolos");
  var length = $Id("rangevalue");

  upper.checked ? (upper = true) : (upper = false);
  lower.checked ? (lower = true) : (lower = false);
  number.checked ? (number = true) : (number = false);
  symbol.checked ? (symbol = true) : (symbol = false);

  console.log(`Length: ${length.value}\nUppercase: ${upper}\nLowercase: ${lower}\nNumber: ${number}\nSymbol: ${symbol}`);

  if (!(upper + lower + number + symbol) >= 1) {
    console.error("Marque uma das opções...");
    alert("Marque uma das opções.");
  } else {
    new GeraSenha(length.value, upper, lower, number, symbol);

    medirForca(length.value, upper, lower, number, symbol);
  }

  const titulo = document.querySelector("#senhaGeradaView");
  typeWriter(titulo);
  console.log("Botão desativado...");

  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
      document.getElementById("btnGerar").disabled = true;
      setTimeout(() => (elemento.innerHTML += letra), 75 * i);
    });
    myFunction();
    function myFunction() {
      setTimeout(() => {
        document.getElementById("btnGerar").disabled = false;
        console.log("Botão ativado...");
      }, 1500);
    }
  }
});
