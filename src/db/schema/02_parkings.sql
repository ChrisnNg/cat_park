-- Drop and recreate Users table

DROP TABLE IF EXISTS parkings CASCADE;
CREATE TABLE parkings (
  id SERIAL PRIMARY KEY NOT NULL,
  longitude Decimal(9,6) NOT NULL,
  latitude Decimal(9,6) NOT NULL,
  rating VARCHAR(60) NOT NULL,
  karma int NOT NULL,
  photo_url
);
