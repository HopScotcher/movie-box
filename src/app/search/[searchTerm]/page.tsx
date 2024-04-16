"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/MainPageComponents.tsx/MovieCard";
MovieCard;

type Params = {
  searchTerm: string;
};

type Movie = {
  id: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  vote_count: string;
};
// type Movies

export default function SearchPage({ params }: { params: Params }) {
  const [movies, setMovies] = useState<Movie[]>();

  console.log(params);

  const searchMovie = async () => {
    let res;
    try {
      res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}&query=${params?.searchTerm}&language=en-US&include_adult=false`
      );
      await setMovies(res?.data.results);
    } catch (error) {
      console.log(error);
    }

    console.log(res?.data.results);
  };

  useEffect(() => {
    searchMovie();
  }, [params]);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6"> No movies found</h1>
      )}

      {movies &&
        movies.map((movie) => <MovieCard key={movie?.id} movieProp={movie} />)}
    </div>
  );
}
