CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

INSERT INTO "pizza" ("name", "description", "price", "image_path")
VALUES ('Tomato Soup','If you like pizza, but you hate the toppings, the cheese, and the crust, you''ll love this!',12.99,'images/tomato_soup.jpg'),
('Onomatopizza','We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you''ll SMACK your lips.',14.99,'images/onopizza.jpg'),
('Pepperoni','Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.',14.99,'images/pepperonipizza.jpg'),
('Over the Rainbow','Taste the rainbow! One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion. Complimentary water served in a spray bottle to taste an actual rainbow.',19.99,'images/doritospizza.jpg'),
('Chinese Firedragon','Pepperoni, pineapple and banana peppers.',15.99,'images/pineapplepizza.jpg'),
('Bad Date','Garlic, Onion and Pepperoni.',24.99,'images/baddatepizza.jpg'),
('Another Little Pizza My Heart', 'Cheese Pizza. Personal size only.', 5.99,'images/pizzaheart.jpg');

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"street_address" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT NOT NULL
);

UPDATE "pizza"
SET "image_path" = 'pizzaheart.jpg'
WHERE "name" = 'Another Little Pizza My Heart';

UPDATE "pizza"
SET "image_path" = 'baddatepizza.jpg'
WHERE "name" = 'Bad Date';

UPDATE "pizza"
SET "image_path" = 'pineapplepizza.jpg'
WHERE "name" = 'Chinese Firedragon';

UPDATE "pizza"
SET "image_path" = 'doritospizza.jpg'
WHERE "name" = 'Over the Rainbow';

UPDATE "pizza"
SET "image_path" = 'pepperonipizza.jpg'
WHERE "name" = 'Pepperoni';

UPDATE "pizza"
SET "image_path" = 'tomato_soup.jpg'
WHERE "name" = 'Tomato Soup';

UPDATE "pizza"
SET "image_path" = 'onopizza.jpg'
WHERE "name" = 'Onomatopizza';
