DROP TABLE subscribers;
 
CREATE TABLE subscribers (
    id serial PRIMARY KEY,
    name TEXT,
    email TEXT,
    phone INTEGER NOT NULL,
    notes TEXT   

);

 
INSERT INTO subscribers(
    name,
    email, 
    phone, 
    notes
    ) 
VALUES (
    'Paul Rogan', 
    'paul@gmail.com', 
    763-900-1300, 
    'I am looking for sam in my contacts'
);

INSERT INTO subscribers (
    name,
    email, 
    phone, 
    notes
    ) 
VALUES (
    'Denver Hollis', 
    'Dms@gmail.com', 
    917-900-8422, 
    'My wife gave me this'
);

INSERT INTO contacts (
    name,
    email, 
    phone, 
    notes
    ) 
VALUES (
    'Sarah Good', 
    'sarah11@gmail.com', 
    240-114-1300, 
    'Brand new number!'
);

select * from subscribers ;




