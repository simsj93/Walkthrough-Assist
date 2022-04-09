CREATE USER "wassistant"@"localhost" IDENTIFIED BY "MayIAssistU";
GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT ON walkthrough_assist.* TO "wassistant"@"localhost";
ALTER USER 'wassistant'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MayIAssistU';
