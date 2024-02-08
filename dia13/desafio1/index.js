class Computador {
    Tipo
    Processador
    PlacaDeVideo
    Armazenamento
    MemoriaRam
    Ssd

    constructor(tipo, processador, placaDeVideo, armazenamento, memoriaRam, ssd) {
        this.Tipo = tipo;
        this.Processador = processador;
        this.PlacaDeVideo = placaDeVideo;
        this.Armazenamento = armazenamento;
        this.MemoriaRam = memoriaRam;
        this.Ssd = ssd;
    }


    ExibirInformações() {
        console.log("Informações do computador:"
            + `\n\t Tipo: ${this.Tipo}`
            + `\n\t Processador: ${this.Processador}`
            + `\n\t Placa de Video: ${this.PlacaDeVideo}`
            + `\n\t Armazenamento: ${this.Armazenamento} GB`
            + `\n\t Memória RAM: ${this.MemoriaRam} GB`
            + `\n\t SSD: ${this.Ssd}`)
    }
}

//exemplo
const meuPc = new Computador("notebook", "Intel i7 9th gen", "GTX 1660ti", 512, 16, true);
meuPc.ExibirInformações();