-- Active: 1719743290311@@0.0.0.0@3306@mealSharingWebsite

CREATE TABLE Reservation (
id INT,
number_of_guests INT,
meal_id INT,
created_date DATE,
contact_phonenumber VARCHAR(255),
contact_name VARCHAR(255),
contact_email VARCHAR(255),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES Meal(id)
);

