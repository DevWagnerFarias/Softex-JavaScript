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