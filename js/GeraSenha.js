class GeraSenha {
  constructor(length, upercase, lowercase, number, symbol) {
    this._length = length;
    this._upercase = upercase;
    this._lowercase = lowercase;
    this._number = number;
    this._symbol = symbol;

    this._uperStr = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
    this._lowerStr = "abcdefghijklmnopqrstuvwxyz";
    this._numberStr = "0123456789";
    this._symbolStr = "!@#$%^&*()+?><:{}[]";

    this.formaPadrao();
  }

  formaPadrao() {
    var padrao = "";

    this._upercase ? (padrao = padrao + this._uperStr) : (padrao = padrao);
    this._lowercase ? (padrao = padrao + this._lowerStr) : (padrao = padrao);
    this._number ? (padrao = padrao + this._numberStr) : (padrao = padrao);
    this._symbol ? (padrao = padrao + this._symbolStr) : (padrao = padrao);

    this.getPassword(padrao);
  }

  getPassword(chars) {
    var passwordLength = this._length;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    var novaSenha = (document.getElementById("senhaGerada").value = password);

    this.validaSenha(novaSenha);
  }

  validaSenha(novaSenha) {
    var containUper = false;
    var containLower = false;
    var containNumber = false;
    var containSymbol = false;

    const senha = [...novaSenha];

    senha.forEach((element) => {
      if (this._uperStr.includes(element)) {
        containUper = true;
      }
      if (this._lowerStr.includes(element)) {
        containLower = true;
      }
      if (this._numberStr.includes(element)) {
        containNumber = true;
      }
      if (this._symbolStr.includes(element)) {
        containSymbol = true;
      }
    });

    if (this._upercase != containUper) {
      console.log(`Senha Inalida:   ${novaSenha}   não contem Maiuscolo`);
      this.formaPadrao();
    }
    if (this._lowercase != containLower) {
      console.log(`Senha Inalida:   ${novaSenha}   não contem Minuscolo`);
      this.formaPadrao();
    }
    if (this._number != containNumber) {
      console.log(`Senha Inalida:   ${novaSenha}   não contem Numero`);
      this.formaPadrao();
    }
    if (this._symbol != containSymbol) {
      console.log(`Senha Inalida:   ${novaSenha}   não contem Simbolo`);
      this.formaPadrao();
    }
  }
}

// fazer animação da senha sendo escrita na tela letra por letra
