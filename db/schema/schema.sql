DROP TABLE IF EXISTS organizations CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS credentials CASCADE;

CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  organization_logo_url VARCHAR(255)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE
);

CREATE TABLE credentials (
  id SERIAL PRIMARY KEY NOT NULL,
  website_name VARCHAR(255) NOT NULL,
  website_url VARCHAR(255) NOT NULL,
  website_username VARCHAR(255) NOT NULL,
  website_password VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP,
  modified_at TIMESTAMP,
  category VARCHAR(255),
  thumbnail_logo_url VARCHAR(255)
);