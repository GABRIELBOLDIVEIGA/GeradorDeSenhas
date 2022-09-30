class GeraSenha {
  constructor(length, uppercase, lowercase, number, symbol) {
    this._length = length;
    this._uppercase = uppercase;
    this._lowercase = lowercase;
    this._number = number;
    this._symbol = symbol;

    this._upperStr = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
    this._lowerStr = "abcdefghijklmnopqrstuvwxyz";
    this._numberStr = "0123456789";
    this._symbolStr = "!@#$%^*()+?:{}[]";

    this.formaPadrao();
  }

  formaPadrao() {
    var padrao = "";

    this._uppercase ? (padrao += this._upperStr) : padrao;
    this._lowercase ? (padrao += this._lowerStr) : padrao;
    this._number ? (padrao += this._numberStr) : padrao;
    this._symbol ? (padrao += this._symbolStr) : padrao;

    this.getPassword(padrao);
  }

  getPassword(chars) {
    var passwordLength = this._length;
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }

    // document.getElementById("senhaGerada").value = password;

    this.validaSenha(password);
  }

  validaSenha(password) {
    var containUper = false;
    var containLower = false;
    var containNumber = false;
    var containSymbol = false;

    const senha = [...password];

    senha.forEach((element) => {
      if (this._upperStr.includes(element)) {
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

    if (this._uppercase == containUper && this._lowercase == containLower && this._number == containNumber && this._symbol == containSymbol) {
      document.getElementById("senhaGerada").value = password;
      document.getElementById("senhaGeradaView").textContent = password;
    } else {
      console.log(`Padrão Invalido: ${password}`);
      this.formaPadrao();
    }

    // if (this._uppercase != containUper) {
    //   console.log(`Senha Inalida:   ${password}   não contem Maiuscolo`);
    //   this.formaPadrao();
    // }
    // if (this._lowercase != containLower) {
    //   console.log(`Senha Inalida:   ${password}   não contem Minuscolo`);
    //   this.formaPadrao();
    // }
    // if (this._number != containNumber) {
    //   console.log(`Senha Inalida:   ${password}   não contem Numero`);
    //   this.formaPadrao();
    // }
    // if (this._symbol != containSymbol) {
    //   console.log(`Senha Inalida:   ${password}   não contem Simbolo`);
    //   this.formaPadrao();
    // }
  }
}

// fazer animação da senha sendo escrita na tela letra por letra
