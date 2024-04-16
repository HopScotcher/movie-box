// "use client";
import React from "react";
import axios from "axios";
import truncate from "@/lib/truncateValue";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

type moviePageprop = {
  movie: object;
};

type GenreProp = {
  id: string;
  name: string;
};

const getMovie = async (movieId: string) => {
  const res = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_MOVIES_API_KEY}`
  );
  return res;
};

export default async function DetailPage({ params }: any) {
  const movieId = String(params.movieId);
  const movieObj = await getMovie(movieId);
  const movie = movieObj.data;

  console.log(movie);

  return (
    <div>
      {movie && (
        // <div
        //   className={`h-screen bg-no-repeat bg-cover bg-center bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})]`}
        // >
        <CardContainer
          className={`inter-var min-h-screen bg-no-repeat bg-cover bg-center bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})]`}
        >
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border  card lg:card-side ">
            <div className="lg:h-full">
              <CardItem translateZ="100" className="lg:h-full w-full mt-4">
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    movie.poster_path || movie.backdrop_path
                  }`}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>
            <div className="p-3">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-700 dark:text-white"
              >
                {movie.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-slate-900 text-md max-w-sm mt-2 dark:text-neutral-300"
              >
                <div className="mb-2">
                  Genres:
                  {movie.genres.map((genre: GenreProp) => (
                    <span className="text-slate-600 pl-2" key={genre.id}>
                      {genre?.name}
                    </span>
                  ))}
                </div>
                {movie.overview}
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Save to Favorites
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Watch Trailer
                </CardItem>
              </div>
            </div>
          </CardBody>
        </CardContainer>
        // </div>
      )}
    </div>
  );
}
