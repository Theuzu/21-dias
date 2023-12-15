let alunos = []
let contador = 0
let notas = []
let continuar = "s"

while (continuar == "s") {

    let nomesInput = prompt("Insira o nome do aluno")
    alunos[contador] = nomesInput
    let notasInput = parseFloat(prompt("Insira a nota desse aluno"))
    notas[contador] = notasInput
    continuar = prompt("Deseja continuar? (s/n)")

    contador++;
    
}

console.log("As notas dos alunos foram:")

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + "-" + notas[i])
    
}

let somaNotas = 0
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
    
}

console.log("A soma total das notas foi de: " + somaNotas)

let mediaAlunos = somaNotas / alunos.length

console.log("A média dos alunos foi de " + mediaAlunos)