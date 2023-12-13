let numDeNotas = 0
let homens = 0
let homensAcimaDaMedia = 0
let mulheres = 0
let mulheresAcimaDaMedia = 0
let somaDasNotas = 0
let maiorNotaHomens = 0


let condition = "sim";

while (condition === "sim") {
    let nota = Number(prompt("Insira a nota do aluno"))
    let sexo = (prompt("Insira o sexo do aluno (m/f)"))
   condition = prompt('Quer cadastrar um aluno? (digite "sim" para cadastrar)')

 somaDasNotas = somaDasNotas + nota;

 if (sexo == "m") {
    homens++
    numDeNotas++
  

    if (nota > maiorNotaHomens ) {
       maiorNotaHomens = nota 
    }

    ultimaNotaHomens = nota
    
    if (nota > 7) {
        homensAcimaDaMedia++
        
    }
 }
 
 if (sexo == "f") {
    mulheres++
    numDeNotas++

    if (nota > 7) {
        mulheresAcimaDaMedia++
       
    }
 }
}
console.log("A média geral dos alunos é de " + (somaDasNotas/numDeNotas))

console.log("A quantidade de mulheres que enviaram as notas é de " + mulheres)
console.log("A quantidade de mulheres acima da média é de " +  mulheresAcimaDaMedia)

console.log("A quantidade de homens que enviaram as notas é de " + homens)
console.log("A quantidade de homens acima da média é de " + homensAcimaDaMedia)

console.log("A maior nota dos homens foi " + maiorNotaHomens)