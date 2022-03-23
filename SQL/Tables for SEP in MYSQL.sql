CREATE TABLE Users(
	UserId INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
	FirstName VARCHAR(200),
	LastName VARCHAR(200),
	Email VARCHAR(100),
	Username VARCHAR(200),
	Password VARCHAR(200),
	Department VARCHAR(12),
  CONSTRAINT check_Department CHECK (Department IN ('Consultant','Line Manager','Finance'))
);

INSERT INTO Users (FirstName,LastName,Email,Username,Password,Department) VALUES ('Hashim','Umarji','hashim@gmail.com','Lethal','P455w0rd!','Consultant');
INSERT INTO Users (FirstName,LastName,Email,Username,Password,Department) VALUES ('Karim','Fawaz','karim@gmail.com','Kfawaz','ThisIsATest','Finance');
INSERT INTO Users (FirstName,LastName,Email,Username,Password,Department) VALUES ('Nicolae','Savin','nicolae@gmail.com','Nicu','Romania','Line Manager');