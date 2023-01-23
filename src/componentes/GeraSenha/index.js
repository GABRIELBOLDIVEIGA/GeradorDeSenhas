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

    // console.log("Senha Gerada:", senha);
    return senha;
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
        var numeroRandomico = Math.floor(Math.random() * padrao.length);
        senha += padrao.substring(numeroRandomico, numeroRandomico + 1);
    }

    return senha;
}

function validaSenha(senha, maiusculo, minusculo, numero, simbolo) {
    var contemMaiusculo = false;
    var contemMinusculo = false;
    var contemNumero = false;
    var contemSimbolo = false;

    var senhaAValidar = [...senha];

    senhaAValidar.forEach((element) => {
        if (maiusculoStr.includes(element)) {
            contemMaiusculo = true;
        }
        if (minusculoStr.includes(element)) {
            contemMinusculo = true;
        }
        if (numeroStr.includes(element)) {
            contemNumero = true;
        }
        if (simboloStr.includes(element)) {
            contemSimbolo = true;
        }
    });

    if (contemMaiusculo == maiusculo && contemMinusculo == minusculo && contemNumero == numero && contemSimbolo == simbolo) {
        return true;
    }

    return false;
}
