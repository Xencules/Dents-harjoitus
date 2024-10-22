## Project Name

# Overview
This project consists of a frontend built with React and a backend built with Spring Boot. The backend uses a MySQL database, and an SQL script is provided to set up the database.

# Prerequisites
Node.js and npm (for the frontend)
Java 11+ (for the backend)
Maven (for the backend)
MySQL (for the database)

# Frontend Installation
Navigate to the frontend directory:  
cd frontend
Install the dependencies:  
npm install
Start the development server:  
npm run dev
The frontend should now be running on http://localhost:5173.  

# Backend Installation
Navigate to the backend directory:  
cd backend
Install the dependencies and build the project using Maven:  
mvn clean install
Run the Spring Boot application:  
mvn spring-boot:run
The backend should now be running on http://localhost:8080.  

# Database Setup
Open MySQL Workbench and connect to your MySQL server. 
Check secure_file_priv Variable: This variable restricts the directories from which files can be loaded. You need to ensure that the directory containing your files is allowed. The files are located in /frontend/src/assets-folder.
You will need to change the folder settings in the sql-script file to match the location where your secure_file_priv variable has set as a "allowed" folder.
Test LOAD_FILE Function: Run a simple query to test if the LOAD_FILE function can read a file from the specified directory
Run the SQL script located at sql/dents.sql to set up the database.
url=jdbc:mysql://localhost:3306/dents_database
username=dentstask
password=2024

# Running the Project
Ensure the MySQL server is running and the database is set up.  
Start the backend server as described in the Backend Installation section.  
Start the frontend server as described in the Frontend Installation section.  
You should now be able to access the application at http://localhost:5173.

# Login information are:
username: jukka
password: salasana

username: pekka
password: fun123


