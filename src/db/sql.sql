--
-- File generated with SQLiteStudio v3.0.7 on 周二 一月 26 10:48:40 2016
--
-- Text encoding used: GBK
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: tb_users
CREATE TABLE tb_users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR (50) NOT NULL, password VARCHAR (32) NOT NULL, reg_date VARCHAR (13) NOT NULL, log_date VARCHAR (13));
INSERT INTO tb_users (id, name, password, reg_date, log_date) VALUES (1, 'user', '8C77000DA31001304CA3864D2F895B47', '1453776373650', '1453776373650');

-- Table: tb_testdata
CREATE TABLE tb_testdata (data VARCHAR);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
