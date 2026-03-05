import { SQLiteDatabase } from "expo-sqlite"
import { Player } from "../types/player"

export async function migrateDbIfNeeded(db: any) {
  let { user_version: currentDbVersion } = await db.getFirstAsync('PRAGMA user_version')

  if (currentDbVersion < 1) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        points INTEGER NOT NULL UNIQUE,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)

    currentDbVersion = 1
    await db.execAsync(`PRAGMA user_version = ${currentDbVersion}`)
  }
}

export async function getPlayer(db: SQLiteDatabase, name: string): Promise<Player | null> {
  const player = await db.getFirstAsync<Player>('SELECT * FROM players WHERE id = ?', [name]);

  if (!player) {
    console.log('Aucun joueur trouvé:', name)
    return null;
  }

  return player;
}

export async function insertUser(db: SQLiteDatabase, name: string): Promise<Player> {
  console.log("1")
  const isFound = await db.getFirstAsync<Player>('SELECT id FROM players WHERE name = ?', [name])
  if (isFound) throw new Error('Joueur déjà existant.');

  console.log("2")
  const result = await db.runAsync('INSERT INTO players (name, points) VALUES (?, ?);', [name, 0])
  console.log(result)

  console.log("3")
  if (!result.lastInsertRowId) {
    throw new Error("Une erreur est survenue lors de la création de votre joueur")
  }

  console.log("4")
  const player = await db.getFirstAsync<Player>('SELECT * FROM players WHERE name = ?', [name]);
  if (player !== null) return player;

  console.log("5")
  throw new Error("Joueur introuvable");
}

export async function updatePlayer(db: SQLiteDatabase, id: number) {
  const player = await db.getFirstAsync('SELECT id FROM players WHERE id = ?', [id])

  if (!player) {
    console.log("Player avec cet ID n'est pas trouvé:", id)
    throw new Error('Joueur introuvable.')
  }

  const result = await db.runAsync('UPDATE players SET points = ? WHERE id = ?;', [0, id])
  return result.changes > 0
}