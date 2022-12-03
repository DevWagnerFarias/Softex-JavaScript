/*Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.*/


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
