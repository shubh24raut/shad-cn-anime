import { Animes } from "@/types/types";
import api from "./api";

const getAnimeList = async (
  url: string,
  page: number,
  size: number,
  searchTerm?: string,
  genreTerm?: string
): Promise<Animes> => {
  try {
    const response = await api.get(url, {
      params: {
        page,
        size,
        ...(searchTerm ? { search: searchTerm } : {}),
        ...(genreTerm ? { genre: genreTerm } : {}),
      },
    });

    // Assert the response data type
    return response.data; // Cast the response data to the Animes type
  } catch (error) {
    console.error("Error fetching anime list:", error);
    throw error; // Rethrow the error for further handling
  }
};

export const getAllAnimeList = async (
  url: string,
  page: number,
  size: number
): Promise<Animes> => {
  return await getAnimeList(url, page, size);
};

export const getGenreAnimeList = async (
  url: string,
  page: number,
  size: number,
  genreTerm: string
): Promise<Animes> => {
  return await getAnimeList(url, page, size, undefined, genreTerm);
};

export const getSearchAnimeList = async (
  url: string,
  page: number,
  size: number,
  searchTerm: string
): Promise<Animes> => {
  return await getAnimeList(url, page, size, searchTerm);
};
