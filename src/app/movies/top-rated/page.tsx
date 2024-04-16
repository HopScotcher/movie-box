"use client";

import React from "react";
import CategoryDiv from "@/app/_components/CategoryDiv";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const [movies, setMovies] = useState();

  const fetchMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&language=en-US&page=1`

        // { next: { revalidate: 10000 } }
      );
      const jsonMovies = await res.data.results;
      console.log(jsonMovies);
      setMovies(jsonMovies);
    } catch (error) {
      throw new Error("Could not fetch Movies");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      {movies ? (
        <CategoryDiv categoryName="Top Rated" movies={movies} />
      ) : (
        <p>Could not load data</p>
      )}
    </div>
  );
}
