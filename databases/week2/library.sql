-- Active: 1719743290311@@0.0.0.0@3306@homework

-- Creating a database

-- Creating the Books table
CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    publish_date DATE,
    isbn VARCHAR(20) UNIQUE NOT NULL
);

-- Creating the Authors table
CREATE TABLE Authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT
);

-- Creating the Members table
CREATE TABLE Members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    membership_date DATE NOT NULL
);

-- Creating the Loans table
CREATE TABLE Loans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT NOT NULL,
    book_id INT NOT NULL,
    loan_date DATE NOT NULL,
    return_date DATE,
    FOREIGN KEY (member_id) REFERENCES Members(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Books(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creating the Genres table
CREATE TABLE Genres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Creating the Book_Genres linking table for many-to-many relationship
CREATE TABLE Book_Genres (
    book_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY (book_id) REFERENCES Books(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES Genres(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Creating the Book_Authors linking table for many-to-many relationship
CREATE TABLE Book_Authors (
    book_id INT NOT NULL,
    author_id INT NOT NULL,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES Books(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (author_id) REFERENCES Authors(id) ON DELETE CASCADE ON UPDATE CASCADE
);
