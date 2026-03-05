import { useSQLiteContext } from 'expo-sqlite'
import { Player } from '../types/player'
import { getPlayer, insertUser } from '../services/database'

export const usePlayer = () => {
  const db = useSQLiteContext();

  const fetchPlayer = async (name: string): Promise<Player> => {
		const result = await getPlayer(db, name);
    
    if (!result) {
      return await insertUser(db, name);
    }

    return result;
  }

  return { fetchPlayer }
}
