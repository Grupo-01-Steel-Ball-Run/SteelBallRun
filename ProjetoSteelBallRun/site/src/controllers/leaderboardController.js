var leaderboardModel = require("../models/leaderboardModel");

function autenticarLeaderboard(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;

    if (fkUsuario == undefined) {
        res.status(400).send("Seu nick está undefined!");
    } else {
        leaderboardModel.autenticarLeaderboard(fkUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                            res.json({
                                fkUsuario: resultadoAutenticar[0].fkUsuario,

                            });
                    } else if (resultadoAutenticar.length == 0) {

                        res.status(403).send("nick e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarLeaderboard(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nick = req.body.nomeServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nick == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        leaderboardModel.cadastrarLeaderboard(nick, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function updateLeaderboard(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var qtdVitorias = req.body.qtdVitoriasServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (qtdVitorias == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        leaderboardModel.updateLeaderboard(qtdVitorias, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticarLeaderboard,
    cadastrarLeaderboard,
    updateLeaderboard
}