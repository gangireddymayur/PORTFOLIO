/*
  # Contact Messages Schema

  1. New Tables
    - contact_messages
      - id (uuid, primary key)
      - name (text)
      - email (text)
      - message (text)
      - created_at (timestamptz)
      - read (boolean)

  2. Security
    - Enable Row Level Security (RLS)
    - Allow public (anon) INSERT only
    - No SELECT / UPDATE / DELETE for public users
*/

-- Enable UUID generation (required for gen_random_uuid)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  read boolean NOT NULL DEFAULT false
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit messages (public contact form)
CREATE POLICY "Allow public insert"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- (Optional but recommended) Explicitly deny public reads
REVOKE ALL ON contact_messages FROM anon;
