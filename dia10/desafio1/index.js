let numeros = [];
let contagem = 0;
let continuar = "s"

while(continuar == "s"){
    let numerosInput = parseInt(prompt("Insira um número"))
    numeros[contagem] = numerosInput
   continuar = prompt("Deseja continuar inserindo números? (s/n)")

    contagem++;
}
console.log("Sequencia invertida dos números:")
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);

}