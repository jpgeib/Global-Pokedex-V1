DROP DATABASE IF EXISTS first_gen;

CREATE DATABASE first_gen;

USE first_gen;

CREATE TABLE pokedex (
    id INT NOT NULL,
    name TEXT NOT NULL,
    pokedex_number INT NOT NULL,
    primary_type TEXT NOT NULL,
    secondary_type TEXT,
    classification TEXT NOT NULL,
    height INT NOT NULL,
    weight INT NOT NULL,
    capture_rate INT NOT NULL,
    location_red TEXT,
    location_blue TEXT,
    location_yellow TEXT,
    base_hp INT NOT NULL,
    base_attack INT NOT NULL,
    base_defense INT NOT NULL,
    base_special INT NOT NULL,
    base_speed INT NOT NULL,
    PRIMARY KEY (id)
);