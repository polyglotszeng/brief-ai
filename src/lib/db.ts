import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "brief.db");

// Ensure data directory exists
import fs from "fs";
fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });

const db = new Database(DB_PATH);

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS subscribers (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    stripe_customer_id TEXT,
    stripe_session_id TEXT,
    plan TEXT,
    status TEXT DEFAULT 'trialing',
    trial_end INTEGER,
    created_at INTEGER DEFAULT (unixepoch())
  );

  CREATE TABLE IF NOT EXISTS briefs (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    date TEXT,
    content TEXT,
    created_at INTEGER DEFAULT (unixepoch()),
    FOREIGN KEY (user_id) REFERENCES subscribers(id)
  );
`);

export { db };
