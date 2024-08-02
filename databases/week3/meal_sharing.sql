-- Active: 1719743290311@@0.0.0.0@3306@mealSharingWebsite

CREATE TABLE Meal (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    when_meal DATETIME,
    max_reservations INT,
    price DECIMAL,
    created_date DATE
);

CREATE TABLE Reservation (
id INT PRIMARY KEY,
number_of_guests INT,
meal_id INT,
created_date DATE,
contact_phonenumber VARCHAR(255),
contact_name VARCHAR(255),
contact_email VARCHAR(255),
FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE
);

CREATE TABLE Review (
id INT PRIMARY KEY,
title VARCHAR(255),
description TEXT,
meal_id INT,
stars INT,
created_date DATE,
FOREIGN KEY (meal_id) REFERENCES Meal(id) ON DELETE CASCADE
);

INSERT INTO Meal (id, title, description, location, when_meal, max_reservations, price, created_date)
VALUES 
(1, 'Pizza', 'Italian Pizza', 'Copenhagen', '2024-07-20 19:00:00', 4, 99.95, '2024-08-02'),
(2, 'Soup', 'Chicken Soup', 'Copenhagen', '2023-01-05 20:00:00', 6, 200, '2024-02-20'),
(3, 'Pasta', 'Pasta carbonara', 'Copenhagen', '2023-01-05 17:00:00', 10, 120.00, '2024-01-12');

INSERT INTO Reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name ,contact_email)
VALUES (1, 3, 1, '2023-01-05', '+45 67898765', 'Jens Jensen', 'jens@gmail.com'),
(2, 4, 2, '2023-01-05', '+45 57483920', 'Carlos Julian', 'cjulian@gmail.com'),
(3, 8, 3, '2023-01-05', '+45 9876543', 'Samuel Lopez', 'slopez@gmail.com');

INSERT INTO Review (id, title, description, meal_id, stars, created_date)
VALUES 
(1, 'Best Pizza Ever!', 'The crust was perfect and the toppings were fresh and delicious.', 1, 5, '2023-01-05'),
(2, 'Comforting Soup', 'This chicken soup was warm and hearty, just like homemade.', 2, 4, '2023-01-05'),
(3, 'Amazing Pasta!', 'The pasta carbonara was creamy and full of flavor. Highly recommend!', 3, 5, '2023-01-05');

--MEAL QUERIES

--Get all meals

SELECT * FROM Meal;

--Add a new meal

INSERT INTO Meal (id, title, description, location, when_meal, max_reservations , price , created_date)
VALUES (5, 'Risotto', 'Fungui Risotto', 'Copenhagen ', '2023-01-05 13:00:00', 10, 150.00, '2024-07-30' ),
(6, 'Pasta', 'Penne alla vodka', 'Copenhagen ', '2023-01-05 17:00:00', 8, 149.95, '2024-12-12' );

--Get a meal with any id, fx 1

SELECT * FROM Meal
WHERE id = 1;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Meal
SET title = 'Risotto', description = 'Fungui Risotto with Parmesan', location = 'Copenhagen ', when_meal = '2023-01-05 13:00:00', max_reservations = 10, price = 150.00
WHERE id = 4;

--Delete a meal with any id, fx 1

DELETE FROM Meal
WHERE id = 2;

--RESERVATION QUERIES

--Get all reservations

SELECT * FROM Reservation;

--Add a new reservation

INSERT INTO Reservation (id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 6, 1, '2023-01-05', '+45 67898765', 'KarolG', 'karolg@gmail.com');

--Get a reservation with any id, fx 1

SELECT * FROM Reservation
WHERE id = 1;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Reservation
SET number_of_guests = 4,
    meal_id = 1,
    created_date = '2023-01-05',
    contact_phonenumber = '+45 67898765',
    contact_name = 'Thalia',
    contact_email = 'thalia@gmail.com'
WHERE id = 4;

--Delete a reservation with any id, fx 1

DELETE FROM Reservation
WHERE id = 4;

--REVIEW QUERIES

--Get all reviews

SELECT * FROM Review;

--Add a new review

INSERT INTO Review (id, title, description, meal_id, stars)
VALUES (5, 'Good', 'Very good meal', 1, 4);

--Get a review with any id, fx 1

SELECT * FROM Review
WHERE id = 1;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE Review
SET title = 'Very good',
    description = 'Very good meal',
    meal_id = 1,
    stars = 4
    WHERE id = 4;
    
--Delete a review with any id, fx 1

DELETE FROM Review
WHERE id = 4;

--ADDITIONAL QUERIES

--Get meals that has a price smaller than a specific price fx 150.00

SELECT * FROM Meal
WHERE price < 150.00;

--Get meals that still has available reservations

SELECT m.id, m.title, m.description, m.location, m.when_meal, m.max_reservations, m.price, m.created_date
FROM Meal m
LEFT JOIN (
    SELECT meal_id, SUM(number_of_guests) AS total_guests
    FROM Reservation
    GROUP BY meal_id
) r ON m.id = r.meal_id
WHERE COALESCE(r.total_guests, 0) < m.max_reservations;

--Get meals that partially match a title. 

SELECT * FROM Meal
WHERE title LIKE '%Pasta%';

--Get meals that has been created between two dates

SELECT * FROM Meal
WHERE created_date BETWEEN '2023-01-01' AND '2024-12-31';

--Get only specific number of meals fx return only 5 meals

SELECT * FROM Meal
LIMIT 2;

--Get the meals that have good reviews

SELECT m.id, m.title, m.description, m.location, m.when_meal, rvw.stars
FROM Meal m
JOIN Review rvw ON m.id = rvw.meal_id
WHERE rvw.stars > 3;

--Get reservations for a specific meal sorted by created_date

SELECT m.id, m.title, r.number_of_guests, r.created_date
FROM Meal m
JOIN Reservation r ON m.id = r.meal_id
WHERE m.id = 1
ORDER BY r.created_date;

--Sort all meals by average number of stars in the reviews

SELECT m.id, m.title, AVG(rvw.stars) AS avg_stars
FROM Meal m
JOIN Review rvw ON m.id = rvw.meal_id
GROUP BY m.id, m.title
ORDER BY avg_stars DESC;










