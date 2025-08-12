import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosPromise } from "axios";
import { type MovieData } from "../types";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

async function getMovies(title: string, page: number): AxiosPromise<MovieData> {
  return axios.get(
    title !== ""
      ? `${API_URL}search/movie?query=${title}&language=pt-BR&page=${page}&api_key=${API_KEY}`
      : `${API_URL}discover/movie?with_genres=10751&language=pt-BR&page=${page}&api_key=${API_KEY}`
  );
}

export function useMovies(title: string, page = 1) {
  const query = useQuery({
    queryFn: () => getMovies(title, page),
    queryKey: ["all-movies"],
    retry: 2,
  });

  return {
    ...query,
    movies: query.data?.data.results,
    totalPages: query.data?.data.total_pages,
    totalResults: query.data?.data.total_results,
  };
}
