-- Drop and recreate Parkings table

DROP TABLE IF EXISTS parkings CASCADE;
CREATE TABLE parkings (
  id SERIAL PRIMARY KEY NOT NULL,
  longitude Decimal(9,6) NOT NULL,
  latitude Decimal(9,6) NOT NULL,
  rating SMALLINT DEFAULT 0,
  karma int DEFAULT 0,
  photo_url
);
