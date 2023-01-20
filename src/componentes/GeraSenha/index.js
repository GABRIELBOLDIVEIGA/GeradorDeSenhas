const maiusculoStr = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
const minusculoStr = "abcdefghijklmnopqrstuvwxyz";
const numeroStr = "0123456789";
const simboloStr = "!@#$%^*()+?><:{}[]";

export default function geraSenha(tamanho, maiusculo, minusculo, numero, simbolo) {
    const padrao = montaPadrao(maiusculo, minusculo, numero, simbolo);

    var senha = "";
    var senhaValida = false;
    while (!senhaValida) {
        senha = criaSenha(padrao, tamanho);
        senhaValida = validaSenha(senha, maiusculo, minusculo, numero, simbolo);
    }

    console.log("Senha Gerada:", senha);
}

function montaPadrao(maiusculo, minusculo, numero, simbolo) {
    var padrao = "";

    maiusculo ? (padrao += maiusculoStr) : (padrao = padrao);
    minusculo ? (padrao += minusculoStr) : (padrao = padrao);
    numero ? (padrao += numeroStr) : (padrao = padrao);
    simbolo ? (padrao += simboloStr) : (padrao = padrao);

    return padrao;
}

function criaSenha(padrao, tamanho) {
    var senha = "";
    for (var i = 0; i < tamanho; i++) {
        var randomNumber = Math.floor(Math.random() * padrao.length);
        senha += padrao.substring(randomNumber, randomNumber + 1);
    }

    return senha;
}

function validaSenha(senha, maiusculo, minusculo, numero, simbolo) {
    var containUper = false;
    var containLower = false;
    var containNumber = false;
    var containSymbol = false;

    var senhaAValidar = [...senha];

    senhaAValidar.forEach((element) => {
        if (maiusculoStr.includes(element)) {
            containUper = true;
        }
        if (minusculoStr.includes(element)) {
            containLower = true;
        }
        if (numeroStr.includes(element)) {
            containNumber = true;
        }
        if (simboloStr.includes(element)) {
            containSymbol = true;
        }
    });

    if (containUper == maiusculo && containLower == minusculo && containNumber == numero && containSymbol == simbolo) {
        return true;
    }

    return false;
}
