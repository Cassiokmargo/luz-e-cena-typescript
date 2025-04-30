import axios from "axios";
import { Movie } from "../types";

const BASE_URL = 'https://my-json-server.typicode.com/Cassiokmargo/luz-e-cena-api';

export const getMovies = async (): Promise<Movie[]> => {
   const response = await axios.get<Movie[]>(`${BASE_URL}/movies`)
   return response.data;
};