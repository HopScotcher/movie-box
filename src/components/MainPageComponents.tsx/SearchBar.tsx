"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import ThemeToggle from "@/app/_components/themeToggle";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };

  return (
    <div className="navbar bg-gray-800 text-gray-300 top-3 inset-x-0 max-w-full mx-auto z-50 rounded mb-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={`/movies/top-rated`}>Top Rated</Link>
            </li>
            <li>
              <Link href={`/movies/upcoming`}>Upcoming</Link>
            </li>
            <li>
              <Link href={`/movies/popular`}>Popular</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl uppercase" href={`/`}>
          Moviebox
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={`/`}>Trending</Link>
          </li>
          <li>
            <Link href={`/movies/top-rated`}>Top Rated</Link>
          </li>
          <li>
            <Link href={`/movies/upcoming`}>Upcoming</Link>
          </li>
          <li>
            <Link href={`/movies/popular`}>Popular</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <div>
          <ThemeToggle theme={''} toggleTheme={''} />
        </div> */}

        <form action="" onSubmit={handleSubmit} className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            id="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-ghost btn-circle" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
