-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE ecommerce_db (
    id NOT NULL INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(30) NOT NULL,
    price NUMERIC(8,2) NOT NULL
    );
