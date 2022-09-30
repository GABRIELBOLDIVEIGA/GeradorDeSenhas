function medirForca(length, uper, lower, number, symbol) {
  var peso = calcPesoSenha(length, uper, lower, number, symbol);
  var forca = "";
  // peso <= 20 ? (forca = "Fraca") : forca;
  // peso >= 21 && peso <= 25 ? (forca = "Media") : forca;
  // peso >= 26 && peso <= 30 ? (forca = "Forte") : forca;
  // peso >= 31 ? (forca = "Muito Forte") : forca;

  if (peso <= 20) {
    forca = "Fraca";
    document.getElementById("senhaFraca").classList.add("level");
    document.getElementById("senhaMedia").classList.remove("level");
    document.getElementById("senhaForte").classList.remove("level");
    document.getElementById("senhaMuitoForte").classList.remove("level");
  }
  if (peso >= 21 && peso <= 25) {
    forca = "Media";
    document.getElementById("senhaFraca").classList.add("level");
    document.getElementById("senhaMedia").classList.add("level");
    document.getElementById("senhaForte").classList.remove("level");
    document.getElementById("senhaMuitoForte").classList.remove("level");
  }
  if (peso >= 26 && peso <= 30) {
    forca = "Forte";
    document.getElementById("senhaFraca").classList.add("level");
    document.getElementById("senhaMedia").classList.add("level");
    document.getElementById("senhaForte").classList.add("level");
    document.getElementById("senhaMuitoForte").classList.remove("level");
  }
  if (peso >= 31) {
    forca = "Muito Forte";
    document.getElementById("senhaFraca").classList.add("level");
    document.getElementById("senhaMedia").classList.add("level");
    document.getElementById("senhaForte").classList.add("level");
    document.getElementById("senhaMuitoForte").classList.add("level");
  }

  document.getElementById("nivel").textContent = forca;

  return forca;
}

function calcPesoSenha(length, uper, lower, number, symbol) {
  var peso = 0;

  uper ? (peso += 5) : peso;
  lower ? (peso += 5) : peso;
  number ? (peso += 2) : peso;
  symbol ? (peso += 3) : peso;

  return (peso = parseInt(peso) + parseInt(length));
}
