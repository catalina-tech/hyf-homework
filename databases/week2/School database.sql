-- Active: 1719743290311@@0.0.0.0@3306@homework
CREATE DATABASE School;
USE School;

-- Create the class table
CREATE TABLE Class (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATE NOT NULL,
    ends DATE NOT NULL    
);

-- Create the student table
CREATE TABLE Student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Class(id)
    );

-- Create an index on the name column of the Student table
CREATE INDEX index_student_name ON Student(name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
ALTER TABLE Class
ADD status ENUM(
    'not-started',
    'ongoing',
    'finished'
);