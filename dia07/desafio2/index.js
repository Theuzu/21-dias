let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0
let continuar = false
let mesmaPessoa = false
let continuarTransacao = false

const nome = prompt("Digite seu nome:")
const cpf = prompt("Digite seu cpf:")
do {
    const opcoes = prompt('Digite "S" para saque \nDigite "D" para depósito')
    let valor = 0

    switch (opcoes) {
        case "S":
            valor = Number(prompt("Digite um valor para o saque:"))
            break;

        case "D":
            valor = Number(prompt("Digite um valor para o depósito:"))
            break;
    }
    if (valor < 0) {
        console.log("Valor Inválido. A transação não foi realizada.");
    } else if (opcoes == "S" && valor > saldo) {
        console.log("Saldo insuficiente, a transação não foi realizada");
    } else if (opcoes == "S") {
        console.log(`Olá, ${nome} (${cpf}, seu saldo atual é de R$${saldo}.)`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Tansação realizada com sucesso. Seu saldo atual é de R$${saldo}.`)
        
        continuarTransacao = prompt(`${nome}, deseja realizar outra transação? \nDigite "1" para continuar Digite "2" para parar`)
        if (continuarTransacao == 1) {
            continuar = true, mesmaPessoa = true
        } else {
            continuar = false, mesmaPessoa = false
        }

        
    } else if (opcoes == "D") {
        console.log(`Olá, ${nome} (${cpf}, seu saldo atual é de R$${saldo}.)`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Tansação realizada com sucesso. Seu saldo atual é de R$${saldo}.`)

        continuarTransacao = prompt(`${nome}, deseja realizar outra transação? \nDigite "1" para continuar Digite "2" para parar`)
        if (continuarTransacao == 1) {
            continuar = true, mesmaPessoa = true
        } else {
            continuar = false, mesmaPessoa = false
        }


    }
} while (continuar == true);
const mediaValores = maiorValorInserido / somaValoresInseridos;

console.log(`${nome}, seu maior valor inserido foi de R$${maiorValorInserido}\nA média dos valores inseridos foi de ${mediaValores}\nSeu saldo final é de R$${saldo}`)

