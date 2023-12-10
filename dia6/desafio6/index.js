let primeiroNumero = parseInt(prompt("Insira um número para fazer uma tabuada"))
let limite = parseInt(prompt("Insira o limite de multiplicação dessa tabuada"))


for (let i = 0; i <= limite; i++){
    console.log(primeiroNumero + "x" + i + "=" + i*primeiroNumero)
}

segundoNumero = primeiroNumero + 1;
terceiroNumero = segundoNumero + 1;


for (let i = 0; i <= limite; i++){
    console.log(segundoNumero + "x" + i + "=" + i*segundoNumero)
}


for (let i = 0; i <= limite; i++){
    console.log(terceiroNumero + "x" + i + "=" + i*terceiroNumero)
}