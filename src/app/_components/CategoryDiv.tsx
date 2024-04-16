import React from "react";
import MovieCard from "../../components/MainPageComponents.tsx/MovieCard";
import truncateValue from "@/lib/truncateValue";

type CategoryDivProps = {
  categoryName: string;
  movies: Movie[];
};

type Movie = {
  id: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  vote_count: string;
};

export default function CategoryDiv({
  categoryName,
  movies,
}: CategoryDivProps) {
  return (
    <div>
      <h2 className="text-xl uppercase p-2">{categoryName}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {movies.map((movie) => (
          <MovieCard movieProp={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
