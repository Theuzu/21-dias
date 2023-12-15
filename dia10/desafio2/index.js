let fibonacci = []

let numero = parseInt(prompt("Insira um número, para obter os 10 proximos números na sequencia de fibonacci"))

fibonacci[0] = numero - 1
fibonacci[1] = numero

console.log("Sequencia fibonacci de " + numero + "\n" + numero)
for (let i = 2; i <= 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    console.log(fibonacci[i])
    
}

