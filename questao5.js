let palavra = "Abacaxi";

function inverter(palavra) {
    let palavraArray = palavra.split("");
    let palavraInvertida = "";
    for (let i = palavraArray.length - 1; i >= 0; i--) {
        palavraInvertida += palavraArray[i];
    }
    return palavraInvertida;
}

console.log(inverter(palavra));
