let nomes = [];
let senhas = [];
let cadastros = 0;
let continuar = true

while (continuar) {
    let opções = prompt(
        "Selecione uma das opções:" +
        "\n\t (1) - Cadastrar usuario" +
        "\n\t (2) - Logar usuario" +
        "\n\t (3) - Excluir um cadastro" +
        "\n\t (4) - Encerrar programa"
    );

    switch (opções) {
        case "1":
            nomes[cadastros] = prompt("Crie seu nome de usuario:")
            senhas[cadastros] = prompt("Crie uma senha para o usuario:")
            cadastros++;

            break;

        case "2":
            loginsNome = prompt("Insira seu nome de usuario:")
            loginsSenha = prompt("Insira sua senha: ")
            validarLogin = false

            for (let i = 0; i < nomes.length; i++) {
                if (loginsNome == nomes[i] && loginsSenha == senhas[i]) {
                    validarLogin = true
                }

            }

            if (validarLogin) {
                alert("Seu login foi um sucesso")
            } else {
                alert("Nome ou senha incorretos")
            }

            break;

        case "3":
            let nomeExcluir = prompt("Insira o nome de usuario para excluir");
            let senhaExcluir = prompt("Insira a senha para excluir");

            let indiceExcluir = -1; // Começa com um valor que não existe no array

            for (let i = 0; i < nomes.length; i++) {
                if (nomeExcluir === nomes[i] && senhaExcluir === senhas[i]) {
                    indiceExcluir = i;
                    break;
                }
            }

            if (indiceExcluir !== -1) {
                // Remove o usuário se o índice foi encontrado
                nomes.splice(indiceExcluir, 1);
                senhas.splice(indiceExcluir, 1);
                alert("Cadastro excluído com sucesso!");
            } else {
                alert("Nome ou senha incorretos");
            }

            break;

        case "4":
            continuar = false

            break;
    }
}
