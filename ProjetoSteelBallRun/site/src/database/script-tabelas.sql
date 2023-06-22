drop database steel_ball_run;

CREATE SCHEMA IF NOT EXISTS steel_ball_run DEFAULT CHARACTER SET utf8 ;
USE steel_ball_run ;

-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Usuario` (
  `idUsuario` INT NOT NULL,
  `nick` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Partida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Partida` (
  `idPartidas` INT NOT NULL,
  `voltas` INT NULL,
  `qtdCavalos` INT NULL,
  PRIMARY KEY (`idPartidas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Resultado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Resultado` (
  `fkUsuario` INT NOT NULL,
  `fkPartida` INT NOT NULL,
  `cavaloVencedor` VARCHAR(45) NULL,
  `resultadoPartida` CHAR(8) NULL,
  `idResultado` INT NOT NULL,
  PRIMARY KEY (`idResultado`),
    FOREIGN KEY (`fkUsuario`)
    REFERENCES `Usuario` (`idUsuario`),
    FOREIGN KEY (`fkPartida`)
    REFERENCES `Partida` (`idPartidas`),
    check(resultadoPartida in ('Vencedor','Perdedor'))
    )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Leaderboard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Leaderboard` (
  `idLeaderboard` INT NOT NULL,
  `qtdVitorias` INT NULL,
  `fkResultado` INT NOT NULL,
  PRIMARY KEY (`idLeaderboard`),
    FOREIGN KEY (`fkResultado`)
    REFERENCES `Resultado` (`idResultado`))
ENGINE = InnoDB;