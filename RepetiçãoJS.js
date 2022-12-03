/*Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array*/

let minhaTV = {marca: "Panasonic", tamanha: 39, cor: "Preta"}
let canais = ["globo", "band", "sbt", "record", "canal brasil"]

function tv() {
    for (var prop in minhaTV) {
        console.log(prop)
    }
}


function programação() {
    for (var chan of canais) {
        console.log(chan)
    }
}


tv(minhaTV)
programação(canais)
