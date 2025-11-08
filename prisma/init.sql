-- Script SQL pour initialiser la base de données TANSE
-- Généré depuis prisma/schema.prisma

-- Table Lead : pour les leads/contacts généraux
CREATE TABLE IF NOT EXISTS "Lead" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "company" TEXT,
    "phone" TEXT,
    "message" TEXT,
    "source" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index pour Lead
CREATE INDEX IF NOT EXISTS "Lead_email_idx" ON "Lead"("email");
CREATE INDEX IF NOT EXISTS "Lead_createdAt_idx" ON "Lead"("createdAt");
CREATE INDEX IF NOT EXISTS "Lead_status_idx" ON "Lead"("status");

-- Table Booking : pour les prises de rendez-vous
CREATE TABLE IF NOT EXISTS "Booking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT NOT NULL,
    "service" TEXT NOT NULL,
    "preferredDate" TIMESTAMP(3),
    "preferredTime" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index pour Booking
CREATE INDEX IF NOT EXISTS "Booking_email_idx" ON "Booking"("email");
CREATE INDEX IF NOT EXISTS "Booking_createdAt_idx" ON "Booking"("createdAt");
CREATE INDEX IF NOT EXISTS "Booking_status_idx" ON "Booking"("status");

-- Table ForfaitRequest : pour les demandes de forfaits spécifiques
CREATE TABLE IF NOT EXISTS "ForfaitRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "phone" TEXT,
    "forfaitType" TEXT NOT NULL,
    "forfaitName" TEXT NOT NULL,
    "budget" TEXT,
    "message" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index pour ForfaitRequest
CREATE INDEX IF NOT EXISTS "ForfaitRequest_email_idx" ON "ForfaitRequest"("email");
CREATE INDEX IF NOT EXISTS "ForfaitRequest_forfaitType_idx" ON "ForfaitRequest"("forfaitType");
CREATE INDEX IF NOT EXISTS "ForfaitRequest_createdAt_idx" ON "ForfaitRequest"("createdAt");

-- Table Newsletter : pour les inscriptions newsletter
CREATE TABLE IF NOT EXISTS "Newsletter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "name" TEXT,
    "subscribed" BOOLEAN NOT NULL DEFAULT true,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index pour Newsletter
CREATE INDEX IF NOT EXISTS "Newsletter_email_idx" ON "Newsletter"("email");
CREATE INDEX IF NOT EXISTS "Newsletter_subscribed_idx" ON "Newsletter"("subscribed");

-- Trigger pour updatedAt automatique
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Appliquer le trigger sur toutes les tables
CREATE TRIGGER update_lead_updated_at BEFORE UPDATE ON "Lead" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_booking_updated_at BEFORE UPDATE ON "Booking" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_forfait_updated_at BEFORE UPDATE ON "ForfaitRequest" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_newsletter_updated_at BEFORE UPDATE ON "Newsletter" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
