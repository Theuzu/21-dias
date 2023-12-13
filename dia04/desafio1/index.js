fome = prompt("Você está com fome?");
dinheiro = prompt("Você tem dinheiro?");
restaurante = prompt("O restaurante está aberto?");

if (fome === "não" || dinheiro === "não") {
    console.log("O jantar será em casa");
} else if (restaurante === "sim") {
    console.log("O jantar será no restaurante");
} else {
    console.log("Peça um delivery");
}
