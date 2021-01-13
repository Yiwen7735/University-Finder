
DROP DATABASE IF EXISTS us_uni;
CREATE DATABASE us_uni;
USE us_uni;

CREATE TABLE uni (
	UNITID INT NOT NULL, 
	YEAR INT NOT NULL, 
	INSTNM VARCHAR(255) NOT NULL, 
	ADDR VARCHAR(255) NOT NULL, 
	CITY VARCHAR(255) NOT NULL, 
	STABBR CHAR(2) NOT NULL, 
	LONGITUD DECIMAL(10, 6) NOT NULL, 
	LATITUDE DECIMAL(10, 6) NOT NULL, 
	SATNUM INT NOT NULL, 
	SATPCT INT NOT NULL,
	ACTNUM INT NOT NULL,
	ACTPCT INT NOT NULL,
	SATVR25 INT NOT NULL,
	SATVR75 INT NOT NULL,
	SATMT25 INT NOT NULL,
	SATMT75 INT NOT NULL,
	ACTCM25 INT NOT NULL,
	ACTCM75 INT NOT NULL,
	ACTEN25 INT NOT NULL,
	ACTEN75 INT NOT NULL,
	ACTMT25 INT NOT NULL,
	ACTMT75 INT NOT NULL,
	TUITION2 INT NOT NULL,
	TUITION3 INT NOT NULL
);

LOAD DATA INFILE '/Users/yiwenzhu/git/University-Finder/University_data/merged_data.csv'
INTO TABLE uni
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS