
DROP DATABASE IF EXISTS us_uni;
CREATE DATABASE us_uni;
USE us_uni;

CREATE TABLE uni (
	UNITID INT NOT NULL, 
	INSTNM VARCHAR(255) NOT NULL, 
	ADDR VARCHAR(255) NOT NULL, 
	CITY VARCHAR(255) NOT NULL, 
	STABBR CHAR(2) NOT NULL, 
	LONGITUD DECIMAL(10, 6) NOT NULL, 
	LATITUDE DECIMAL(10, 6) NOT NULL, 
	TUITION2 INT NOT NULL,
	TUITION3 INT NOT NULL, 
	ADMCON1 INT NOT NULL, 
	ADMCON2 INT NOT NULL,
	ADMCON3 INT NOT NULL,
	ADMCON4 INT NOT NULL,
	ADMCON5 INT NOT NULL, 
	ADMCON6 INT NOT NULL,
	ADMCON7 INT NOT NULL,
	ADMCON8 INT NOT NULL,
	ADMCON9 INT NOT NULL, 
	ADMR DECIMAL(5, 4) NOT NULL,
	ADMRM DECIMAL(5, 4) NOT NULL,
	ADMRW DECIMAL(5, 4) NOT NULL, 
	SATVRM DECIMAL(7, 4) NOT NULL,
	SATVRSD DECIMAL(7, 4) NOT NULL,
	SATMTM DECIMAL(7, 4) NOT NULL,
	SATMTSD DECIMAL(7, 4) NOT NULL,
	ACTCMM DECIMAL(6, 4) NOT NULL,
	ACTCMSD DECIMAL(6, 4) NOT NULL,
	ACTENM DECIMAL(6, 4) NOT NULL,
	ACTENSD DECIMAL(6, 4) NOT NULL,
	ACTMTM DECIMAL(6, 4) NOT NULL,
	ACTMTSD DECIMAL(6, 4) NOT NULL, 
	RANKING INT DEFAULT NULL
);


LOAD DATA INFILE '/Users/yiwenzhu/git/University-Finder/University_data/ranked_merged_data.csv'
INTO TABLE uni
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS

