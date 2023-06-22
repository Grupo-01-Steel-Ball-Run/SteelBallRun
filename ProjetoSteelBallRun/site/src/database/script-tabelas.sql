-- SCRIPT PARA O FUNCIONAMENTO CORRETO DO SITE

CREATE DATABASE steel_ball_run;
USE steel_ball_run;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nick VARCHAR(25)
);

CREATE TABLE Partida(
idPartida INT PRIMARY KEY AUTO_INCREMENT,
voltas INT,
qtdCavalos INT
);

CREATE TABLE Resultado(
idResultado INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
fkPartida INT,
cavaloVencedor VARCHAR(45),
resultadoPartida CHAR(8)
);

CREATE TABLE Leaderboard(
idLeaderboard INT PRIMARY KEY AUTO_INCREMENT,
qtdVitorias INT,
fkResultado INT
);
