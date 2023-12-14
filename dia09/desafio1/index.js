do {
let nome = prompt("Insira seu nome")
let idade = parseInt(prompt("Insira sua idade"))
let peso = parseFloat(prompt("Insira seu peso"))
let altura = parseFloat(prompt("Insira sua altura em metros"))
let profissão = prompt("Insira sua profissão")

console.log("Olá " + nome + " você tem " + idade + " anos, é " + profissão + ", tem " + altura + " de altura e pesa " + peso + "kg")

if(idade >= 18) {
    console.log("Está liberado para tomar umas geladas")
}
if(idade < 18){
    console.log("Sem geladas para você")
}

let idadeEmDias = idade * 365
let idadeEmSemanas = idadeEmDias * 7
let idadeEmMeses = idadeEmDias * 30

console.log("Sua idade em dias é de " + idadeEmDias)
console.log("Sua idade em semanas é de " + idadeEmSemanas)
console.log("Sua idade em meses é de " +idadeEmMeses)

//calculo do imc

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Seu IMC se encontra no índice de magreza")
}
if (imc >= 18.5 && imc < 24.9) {
    console.log("Seu IMC se encontra no índice de Normalidade")
}
if (imc >= 24.9 && imc < 30) {
    console.log("Seu IMC se encontra no índice de Sobrepeso")
}
if (imc > 30) {
    console.log("Seu IMC se encontra no índice de Obesidade")
}

//Calculo de idades por ano
let anoAtual = 2023
let anoDeNascimento = anoAtual - idade
let idadeNoAno = 0

console.log("Você nasceu em " + anoDeNascimento)

for (let i = anoDeNascimento; i <= anoAtual; i++) {
    console.log(i + " - " + idadeNoAno + " anos de idade")
    idadeNoAno++
}

continuar = prompt("Deseja inserir os dados novamente? (s/n)")

} while (continuar === "s")