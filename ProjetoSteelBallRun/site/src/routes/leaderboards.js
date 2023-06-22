var express = require("express");
var router = express.Router();

var leaderboardController = require("../controllers/leaderboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de leaderboardController.js
router.post("/cadastrarLeaderboard", function (req, res) {
    leaderboardController.cadastrarLeaderboard(req, res);
})

router.post("/autenticarLeaderboard", function (req, res) {
    leaderboardController.autenticarLeaderboard(req, res);
});

module.exports = router;