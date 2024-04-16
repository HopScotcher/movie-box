"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "@/components/MainPageComponents.tsx/MovieCard";
MovieCard;

type Params = {
  params?: {
    searchTerm: string;
  };
};

// interface Props {
//   params: Params;
// }

export default function SearchPage({ params }: { params: Params }) {
  const [movies, setMovies] = useState([]);

  console.log(params);

  const searchMovie = async () => {
    let res;
    try {
      res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4ad232a54b8f84c2be9c42a1105edd38&query=${params?.searchTerm}&language=en-US&include_adult=false`
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6"> No movies found</h1>
      )}

      {movies &&
        movies.map((movie) => <MovieCard key={movie?.id} movie={movie} />)}
    </div>
  );
}
