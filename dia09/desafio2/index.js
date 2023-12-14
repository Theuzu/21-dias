let confirmar = "n"
let salarioAtual;

while (confirmar != "s") {
    let nome = prompt("Insira seu nome")
    let idade = parseInt(prompt("Insira sua idade"))
    salarioAtual = parseFloat(prompt("Insira seu salário atual, em R$"))

}

    confirmar = prompt("Estes dados estão corretos? (s/n) " +
        "\nNome: " + nome +
        "\nIdade: " + idade +
        "\nSalário Atual: " + salarioAtual)


    let aumento = 0.015
    // let anoAtual = 2023
    console.log("Previsão salarial para os proximos 10 anos:")

    for (let i = anoAtual; i <= anoAtual + 10; i++) {
        salarioAumentado = salarioAtual + salarioAtual * aumento
        aumento *= 2

        console.log(i + "-" + "R$" +salarioAumentado)
    }
