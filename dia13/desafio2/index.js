class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao


    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    CalcularTempo(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Vencedor = ""
        this.Participantes = []
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempo(this.Distancia)
        let vencedor = this.Participantes[0]

        for (let index = 1; index < this.Participantes.length; index++) {
            let tempo = this.Participantes[index].CalcularTempo(this.Distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
            
        }

        return this.Vencedor = vencedor
    }
    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome)
    }
}

let corrida = new Corrida("Monza", "Formula 1", 60000)

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 120, 160, 9)
corrida.Participantes[2] = new Carro("Oeugeot 206", 300, 220, 10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()