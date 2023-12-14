let nome = ""
let idade = 0
let salarioAtual = 0

do {
    nome = prompt("Insira seu nome")
    idade = parseInt(prompt("Insira sua idade"))
    salarioAtual = parseFloat(prompt("Insira seu Salário Atual"))

    confirmar = prompt("Estes dados estão corretos? (s/n) " +
    "\nNome: " + nome +
    "\nIdade: " + idade +
    "\nSalário Atual: " + salarioAtual)
} while (confirmar == "n");

let aumento = 0.015
let anoAtual = 2023

for (let i = anoAtual; i <= anoAtual + 10; i++) {

}