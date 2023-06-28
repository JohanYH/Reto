-- Active: 1687258977643@@127.0.0.1@3306@campuslands
CREATE DATABASE campuslands;

CREATE TABLE pais(
    idPais INT PRIMARY KEY AUTO_INCREMENT,
    nombrePais VARCHAR (20) NOT NULL
);

CREATE TABLE departamento (
    idDep INT PRIMARY KEY AUTO_INCREMENT,
    nombreDep VARCHAR (50) NOT NULL,
    idPais INT NOT NULL,
    FOREIGN KEY (idPais) REFERENCES pais(idPais)
);

CREATE TABLE region(
    idReg INT PRIMARY KEY AUTO_INCREMENT,
    nombreReg VARCHAR (50) NOT NULL,
    idDep INT NOT NULL,
    FOREIGN KEY (idDep) REFERENCES departamento(idDep)
);

CREATE TABLE campers(
    idCamper INT PRIMARY KEY AUTO_INCREMENT,
    nombreCamper VARCHAR (50) NOT NULL,
    apellidoCamper VARCHAR (50) NOT NULL,
    fechaNac DATE,
    idReg INT NOT NULL,
    FOREIGN KEY (idReg) REFERENCES region(idReg)
);