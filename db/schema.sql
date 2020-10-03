CREATE DATABASE states_db;

// states 

USE states_db;

CREATE TABLE UsaStates (
id INT NOT NULL AUTO_INCREMENT,
state VARCHAR(50) NULL,
abbr VARCHAR(5) NULL,
PRIMARY KEY (id)

);

SELECT * FROM UsaStates;

// gas prices 

CREATE TABLE stateGasPrices (
id INT NOT NULL AUTO_INCREMENT,
currency VARCHAR(10) NULL,
name VARCHAR(50) NULL,
gasoline VARCHAR(10) NULL,
midGrade VARCHAR(10) NULL,
premium VARCHAR(10) NULL,
diesel VARCHAR(10) NULL,
PRIMARY KEY (id)

);

SELECT * FROM stateGasPrices;


// visitor centers

CREATE TABLE visitorCenters (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(150) NULL,
stateCode VARCHAR(10) NULL,
longitude VARCHAR(20) NULL,
latitude VARCHAR(20) NULL,
url VARCHAR(200) NULL,
PRIMARY KEY (id)

);


// creates ONE table from THREE tables (joined together)

CREATE TABLE visitorCenterInfo
as
SELECT visitorCenters.id, visitorCenters.name, visitorCenters.longitude,visitorCenters.latitude,
visitorCenters.url, stateGasPrices.currency, stateGasPrices.gasoline, stateGasPrices.midGrade,
stateGasPrices.premium, stateGasPrices.diesel, UsaStates.state, UsaStates.abbr
FROM visitorCenters JOIN UsaStates ON visitorCenters.stateCode = UsaStates.abbr
JOIN stateGasPrices ON UsaStates.state = stateGasPrices.name;



// this is what filters out the repeating data

SET SQL_SAFE_UPDATES=0;
DELETE t1 FROM visitorCenterInfo t1
INNER JOIN visitorCenterInfo t2 
WHERE 
    t1.id < t2.id AND 
    t1.name = t2.name;
    SET SQL_SAFE_UPDATES=1;

// selecting the visitorCenterInfo table 

SELECT * FROM visitorCenterInfo
WHERE visitorCenterInfo.state = "Maine";
