import axios from 'axios';
import { Riddle } from './types';

export async function fetchRiddles(category: string): Promise<Riddle[] | null> {
  try {
    const response = await axios.post('http://localhost:3000/generate-riddles', { category });
    return response.data;
  } catch (error) {
    console.error('Erro ao carregar os enigmas:', error);
    return null;
  }
}
