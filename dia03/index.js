// Entradas de Dados do usuario

let nome = "";
let idade = 0;
let altura = 0;
let peso = 0;

console.log("Insira algumas informações pessoais");

nome = prompt("Insira seu nome");
idade = prompt("Insira sua idade");

alert("Insira informaçõs para o calculo do seu IMC");

altura = prompt("Insira sua Altura");
peso = prompt("Insira seu Peso ");

// calculo idade

let anoDeNascimento = idade - 2023;

// Calculo de IMC

let imcUsuario = peso / (altura * altura);


// Exibindo informações

console.log(
    "Olá" +
    nome +
    ", você tem " +
    idade +
    "anos, nasceu em " +
    anoDeNascimento +
    ", tem " +
    altura +
    "metros de altura, pesa " +
    peso +
    "seu IMC é de " +
    imcUsuario +
    "Kg/m2"
);
