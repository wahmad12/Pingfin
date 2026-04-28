CREATE DATABASE bankdb;

USE bankdb;

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10,2),
  status VARCHAR(50),
  created_at DATETIME
);