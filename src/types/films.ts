import { Genre } from '../const';
import { Review } from './reviews';
export type Film = {
  id: string
  name: string
  previewImage: string
  previewVideoLink: string
  genre: Genre
  posterImage: string
  backgroundImage: string
  backgroundColor: string
  videoLink: string
  description: string
  rating: number
  scoresCount: number
  director: string
  starring: [string]
  runTime: number
  released: number
  isFavorite: boolean
};
