use education ;
drop table user ;
create table user
(	
    id INTEGER NOT NULL AUTO_INCREMENT,
    --lastName varchar(32) not null,
    --firstName varchar(32) not null,
    --road varchar(32) not null,
    --city varchar(32) not null,
    password varchar(32) not null,
    --zip varchar(5) not null,
    email varchar(320) not null,
    CONSTRAINT client_id_pk PRIMARY KEY (id),
    CONSTRAINT UQ_Client_Email UNIQUE (email)
);
insert into user (email,password) values('toto','titi');
show databases ;
show tables ;
select * from user ;
--select * from client;