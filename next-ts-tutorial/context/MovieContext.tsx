"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ResultProps {
  backdrop_path?: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Set up expected interface
interface MovieContextType {
  currentMovie: ResultProps | null,
  setCurrentMovie: (movie: ResultProps | null) => void;
}

const MovieContext = createContext<MovieContextType>({
  currentMovie: null, // Default state
  setCurrentMovie: () => {} // Placeholder function
});

export function useMovie() {
  return useContext(MovieContext);
}

export const MovieProducer = ({ children }: { children: ReactNode }) => {
   const [currentMovie, setCurrentMovie] = useState<ResultProps | null>(null);

  return (
    <MovieContext.Provider value={{ currentMovie, setCurrentMovie }}>
      {children}
    </MovieContext.Provider>
  );
};
