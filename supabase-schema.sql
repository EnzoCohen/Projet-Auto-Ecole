-- Création de la table appointments pour stocker les rendez-vous
CREATE TABLE IF NOT EXISTS appointments (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date DATE NOT NULL,
  license_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Activer Row Level Security (RLS)
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre l'insertion publique
CREATE POLICY "Enable insert for all users" ON appointments
  FOR INSERT
  WITH CHECK (true);

-- Créer une politique pour permettre la lecture (optionnel, pour l'admin)
CREATE POLICY "Enable read access for all users" ON appointments
  FOR SELECT
  USING (true);

-- Créer un index sur la date pour améliorer les performances
CREATE INDEX IF NOT EXISTS appointments_date_idx ON appointments(date);

-- Créer un index sur created_at
CREATE INDEX IF NOT EXISTS appointments_created_at_idx ON appointments(created_at);
