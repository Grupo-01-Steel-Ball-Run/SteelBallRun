var express = require("express");
var router = express.Router();

var leaderboardController = require("../controllers/leaderboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de leaderboardController.js
router.post("/cadastrar", function (req, res) {
    leaderboardController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    leaderboardController.autenticar(req, res);
});

module.exports = router;