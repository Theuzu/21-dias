let valorCombustivel
let quantidadeAbastecida

let opcao = parseInt(
    prompt("Escolhas uma das opções" + "\n1 = Abastecer; \n2 = Calibrar pneus;")
);

switch (opcao) {
    case 1:
        let combustivel = parseInt(
            prompt(
                "O preço da gasolina é R$5.00 , o preço do álcool é de R$ 3.00. selecione a opção para abastecer.; \n1 = gasolina; \n2 = álcool"
            ))
        switch (combustivel) {
            case 1:
                valorCombustivel = parseFloat(prompt("Digite o valor a ser abastecido"))
                quantidadeAbastecida = valorCombustivel / 5;
                console.log("Foram abastecidos " + quantidadeAbastecida + " litros de gasolina")
                break;
                
            case 2:
                valorCombustivel = parseFloat(prompt("Digite o valor a ser abastecido"))
                quantidadeAbastecida = valorCombustivel / 3;
                console.log("Foram abastecidos " + quantidadeAbastecida + " litros de álcool")
                break;
        };
        break;
    case 2:
        console.log("Os pneus foram calibrados.");
}
