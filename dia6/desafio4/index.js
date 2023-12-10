let numero = parseInt(prompt("Insira um número para fazer uma tabuada"))
let limite = parseInt(prompt("Insira o limite de multiplicação dessa tabuada"))

for (let i = numero; i <= numero + 2; i++) {
    console.log("tabuada do número: " + i)
    for (let j = 0; j <= limite; j++) {
        console.log(i + " x " + j + " = " + (i * j))
    }
}