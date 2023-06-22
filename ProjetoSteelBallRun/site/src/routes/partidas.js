var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");

//Recebendo os dados do html e direcionando para a função cadastrar de partidaController.js
router.post("/cadastrarPartida", function (req, res) {
    partidaController.cadastrarPartida(req, res);
})

router.get("/autenticarPartida", function (req, res) {
    partidaController.autenticarPartida(req, res);
});

router.get("/autenticarResultado", function (req, res) {
    partidaController.autenticarResultado(req, res);
});

router.post("/cadastrarResultado", function (req, res) {
    partidaController.cadastrarResultado(req, res);
})



module.exports = router;