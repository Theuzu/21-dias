nome = prompt("Qual o seu nome?");
idade = parseInt(prompt("Qual a sua idade"));
carteira = prompt(
    "Você tem uma carteira de motorista, se sim ela está regular?"
);
carro = prompt("Você tem um carro?");

if (idade < 18 || carteira === "não") {
    console.log(nome + " você não pode dirigir.");
} else if (carro === "não") {
    console.log(nome + " você pode dirigir, mas não tem um carro.");
} else {
    console.log(nome + " você será o motorista!");
}
