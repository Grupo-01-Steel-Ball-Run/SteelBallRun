var partidaModel = require("../models/partidaModel");

function autenticarPartida(res) {

        partidaModel.autenticarPartida()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                            res.json({
                                nick: resultadoAutenticar[0].nick,
                                senha: resultadoAutenticar[0].senha,
                            });
                    } else if (resultadoAutenticar.length == 0) {
                        if(verificacao == true){
                            console.log(`socorro`)
                            res.json({
                            });
                            return 
                        }
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

function cadastrarPartida(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var qtdCavalos = req.body.qtdeCavalosServer;
    var voltas = req.body.qtdeVoltasServer;

    // Faça as validações dos valores
    if (qtdCavalos == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (voltas == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        partidaModel.cadastrarPartida(qtdCavalos, voltas)
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

function cadastrarResultado(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cavaloVencedor = req.body.qtdeCavalosServer;
    var resultadoPartida = req.body.qtdeVoltasServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkPartida = req.body.fkPartidaServer;

    // Faça as validações dos valores
    if (cavaloVencedor == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (resultadoPartida == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkPartida == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        partidaModel.cadastrarResultado(fkUsuario, fkPartida, cavaloVencedor, resultadoPartida)
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

function autenticarResultado(res) {

    partidaModel.autenticarResultado()
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);
                        res.json({
                            nick: resultadoAutenticar[0].nick,
                            senha: resultadoAutenticar[0].senha,
                        });
                } else if (resultadoAutenticar.length == 0) {
                    if(verificacao == true){
                        console.log(`socorro`)
                        res.json({
                        });
                        return 
                    }
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

module.exports = {
    autenticarPartida,
    cadastrarPartida,
    cadastrarResultado
}