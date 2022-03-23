CREATE TABLE Users(
	UserId INT PRIMARY KEY,
	FirstName VARCHAR(200),
	LastName VARCHAR(200),
	Email VARCHAR(100),
	Username VARCHAR(200),
	Password VARCHAR(200),
	Department VARCHAR(12)
);

INSERT INTO Users VALUES (1,'Hashim','Umarji','hashim@gmail.com','Lethal','P455w0rd!','Consultant');
INSERT INTO Users VALUES (2,'Karim','Fawaz','karim@gmail.com','Kfawaz','ThisIsATest','Finance');
INSERT INTO Users VALUES (3,'Nicolae','Savin','nicolae@gmail.com','Nicu','Romania','Line Manager');
