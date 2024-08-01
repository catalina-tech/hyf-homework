-- Active: 1719743290311@@0.0.0.0@3306@homework
-- Active: 1719743290311@@0.0.0.0@3306@USER
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
VALUES ('Buy tickets', 'Buy tickets for for summer holidays', NOW(), NOW(), '2023-07-11', 1, 1);

-- Change the title of a task
UPDATE task SET title = 'Buy tickets for winter holidays', updated = NOW() WHERE id = 1;

--Change a task due date
UPDATE task SET due_date = "2023-08-01", updated = NOW() WHERE id = 2;

--Change a task status
UPDATE task
SET status_id =
(   SELECT id
    FROM status
    WHERE name = 'In progress'  
    ),
    updated = NOW()
    WHERE id = 3;

--Mark a task as complete 
UPDATE task
SET status_id =
(   SELECT id
    FROM status
    WHERE name = 'Done'   
    ),
    updated = NOW()
    WHERE id = 4;

-- Delete a task
DELETE FROM task WHERE id = 5;


