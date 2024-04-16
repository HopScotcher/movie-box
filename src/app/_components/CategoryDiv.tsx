import React from "react";
import MovieCard from "../../components/MainPageComponents.tsx/MovieCard";
import truncateValue from "@/lib/truncateValue";

type CategoryDivProps = {
  categoryName: string;
  movies: MovieProp;
};

type MovieProp ={
  id: string,
  title: string,
  backdrop_path: string,
  poster_path: string,
  vote_average: string

}

export default function CategoryDiv({
  categoryName,
  movies,
}: CategoryDivProps) {
  return (
    <div>
      <h2 className="text-xl uppercase p-2">{categoryName}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.backdrop_path || movie.poster_path}
            rating={truncateValue(movie.vote_average)}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}
