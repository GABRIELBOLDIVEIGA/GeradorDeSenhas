let $Id = document.getElementById.bind(document);

$Id("btnGerar").addEventListener("click", function () {
  
  var uper = $Id("maiuscula");
  var lower = $Id("minuscula");
  var number = $Id("numeros");
  var symbol = $Id("simbolos");
  var length = $Id("rangevalue");

  uper.checked ? (uper = true) : (uper = false);
  lower.checked ? (lower = true) : (lower = false);
  number.checked ? (number = true) : (number = false);
  symbol.checked ? (symbol = true) : (symbol = false);

  new GeraSenha(length.value, uper, lower, number, symbol);
});
