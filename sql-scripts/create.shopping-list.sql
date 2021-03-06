--This file should contain the SQL to create a new TYPE called grocery and 
--a new TABLE called shopping_list. 
--The table will contain 6 columns and you will need to decide which SQL data 
--types to use for each column. 
--We'll supply you with a second SQL file that you will use to seed the shopping_list table items.
--grocery tye should be an enum that can be one of following values:
-- main, snack, lunch, breakfast
--shopping_list table should have 6 columns:
-- primary key column id
-- name column
-- price column that should not be a string and support 2 decimal places
-- date_added column that should default to now()
-- checked column that should be a boolean with default of false
-- category column, use grocery type

DROP TYPE IF EXISTS grocery;
CREATE TYPE grocery AS ENUM (
    'Main',
    'Snack',
    'Lunch',
    'Breakfast'
);


CREATE TABLE IF NOT EXISTS shopping_list (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    price decimal(12,2) NOT NULL,
    date_added TIMESTAMP DEFAULT now() NOT NULL,
    checked BOOLEAN DEFAULT 'false' NOT NULL,
    category grocery NOT NULL
);