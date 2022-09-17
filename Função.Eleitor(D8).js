// Função Tradicional
const input = require('readline-sync');

function eleitor() {
    
    let idade = input.question("Qual a sua idade? ")

    if (idade >= 16) {
        console.log("Você é um eleitor");
    
    } else {
        console.log("Você ainda não pode votar!")
    }

}

// Função tradicional com parâmetros

function eleitor(a, b) {

    let a = 2022
    let b = input.question("Qual a sua idade? ")

    if ((a - b) >= 16) {
        console.log("Você é um eleitor");
    
    } else {
        console.log("Você ainda não pode votar!")
    }

}

// Arrow function com parâmetros

eleitor = (a, b) => {

    let a = 2022
    let b = input.question("Qual a sua idade? ")

    if ((a - b) >= 16) {
        console.log("Você é um eleitor");
    
    } else {
        console.log("Você ainda não pode votar!")
    }
}