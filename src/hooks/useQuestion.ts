"use client";

import { useSQLiteContext } from 'expo-sqlite'
import { Player } from '../types/player'
import { getPlayer, insertUser } from '../services/database'
import { useState } from 'react'
import data from "../../assets/data.json"

type Question = {
  id: number;
  question: string
  reponse1: string
  reponse2: string
  reponse3: string
  reponse4: string
}

// type A_Question = {
//   id: number;
//   result: number;
// }

export const useQuestions = () => {
  const [active, setActive] = useState<Question>(data[0]);

  return {
    active
  }

}