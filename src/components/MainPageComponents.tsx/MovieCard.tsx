import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useRouter } from "next/router";
import Link from "next/link";
import truncate from "@/lib/truncateValue";
import { formatNumberWithCommas } from "@/lib/formatLargeInt";
import Image from "next/image";
import { StarIcon, StarOffIcon } from "lucide-react";

type MovieCardProps = {
  movie: Movie;
};

type Movie = {
  id: string;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  vote_count: string;
};

export default function MovieCard({ movie }: MovieCardProps) {
  //   const router = useRouter();
  const handleClick = () => {
    // router.push("/src/app/movie/page.tsx");
  };

  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="" onClick={handleClick}>
        <CardContent>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path || movie.backdrop_path
            }`}
            width={300}
            height={300}
            alt="movie poster"
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          />
          <h2 className="font-semibold">{movie.title}</h2>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
          <span className="text-slate-600 flex flex-row">
            <StarIcon className="h-5" />
            {truncate(movie.vote_average)}
          </span>
          <span className="text-slate-500">
            {formatNumberWithCommas(Number(movie.vote_count))} votes
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
