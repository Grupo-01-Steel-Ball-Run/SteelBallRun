var database = require("../database/config")

function autenticarPartida() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
        var instrucao = `
    SELECT * FROM Partida ORDER BY idPartidas DESC;
    `;
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarPartida(qtdCavalos, voltas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", qtdCavalos, voltas);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Partida (qtdCavalos, voltas) VALUES ('${qtdCavalos}', '${voltas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarResultado(fkUsuario, fkPartida, cavaloVencedor, resultadoPartida){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario,fkPartida,cavaloVencedor,resultadoPartida);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Resultado (fkUsuario, fkPartida, cavaloVencedor, resultadoPartida) VALUES ('${fkUsuario}', '${fkPartida}', '${cavaloVencedor}, '${resultadoPartida}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    autenticarPartida,
    cadastrarPartida,
    cadastrarResultado
};