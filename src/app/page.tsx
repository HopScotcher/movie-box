"use client";

import Image from "next/image";
import CategoryDiv from "@/app/_components/CategoryDiv";
import SearchBar from "@/components/MainPageComponents.tsx/SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  // const API_KEY = process.env.MOVIES_API_KEY;
  // console.log(API_KEY);
  const [movies, setMovies] = useState();
  const [theme, setTheme] = useState("retro");

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

  const toggleTheme = () => {
    const newTheme = theme === "retro" ? "dark" : "retro";
    setTheme(newTheme);
  };

  return (
    <main className={`min-h-screen Home ${theme}`}>
      
      {movies ? (
        <div className="">
          <CategoryDiv categoryName="Trending" movies={movies} />

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">

          </div> */}
        </div>
      ): (
        <div className="min-h-screen grid place-items-centre "><p>An unexpected error occurred</p></div>
      )}
    </main>
  );
}
