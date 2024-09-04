"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ResultProps } from "@/components/Results";

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
