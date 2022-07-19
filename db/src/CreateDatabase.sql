USE mydb;

CREATE TABLE people (
    id integer not null auto_increment primary key,
    name varchar(255)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;