import React, { useState, useEffect, useRef } from "react";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const HomePage = (movie) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");
  const searchInputRef = useRef();
  const [type, setType] = useState("");

  const fetchMovieResults = (searchTerm, page, type) => {
    fetchMovies(searchTerm, page, type)
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(data.totalResults);
          setError("");
        } else {
          setMovies([]);
          setError(data.Error || "No movies found.");
        }
      })
      .catch(() => setError("Failed to fetch movies. Please try again."));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value.trim();
    if (!searchTerm) {
      setError("Please enter a movie title to search.");
      setMovies([]);
      setTotalResults(0);
      return;
    }
    setPage(1);
    fetchMovieResults(searchTerm, 1, type);
  };

  useEffect(() => {
    if (searchInputRef.current?.value) {
      fetchMovieResults(searchInputRef.current.value, page, type);
    }
  }, [page, type]);

  return (
    <>
      <div className="p-4">
        <form
          onSubmit={handleSearch}
          className="flex flex-col gap-2 mb-4 md:flex-row"
        >
          <input
            type="text"
            ref={searchInputRef}
            placeholder="Search movies.."
            className="border px-4 py-2 w-auto md:w-aut0"
          />
          <select
            className="border px-4 py-2"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episodes</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2">Search</button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
        <Pagination
          currentPage={page}
          totalResults={totalResults}
          onPageChange={(newPage) => setPage(newPage)}
        />
        <div></div>
      </div>

      <div>
        <h1 className="border-b-2 text-3xl text-slate-600 text-center">
          POPULAR MOVIES
        </h1>

        <div className="flex flex-wrap justify-evenly gap-5">
          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>BATMAN</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNGY3N2ZhYmMtYTlmYi00ZWIzLWJiZWMtMjgxMjljYTk3MDAwXkEyXkFqcGc@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>DEADPOOL</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BN2ZlMjIzZjctYzA2My00ZWYyLWI4ZjctMGI2NWYyNzFiZjAwXkEyXkFqcGc@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>Requiem for a Dream</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BY2E1NDI5OWEtODJmYi00Nzg2LWI4MjUtODFiMTU2YWViOTU3XkEyXkFqcGc@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>WEDNESDAY</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>The Avengers</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BZjJjMDc2ZDctNGM3Ni00NTMwLThjNjgtZmNjZWYxNTVhY2NlXkEyXkFqcGdeQXVyMjIxMTIwNDM@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>Benten kozô</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>The Dark Knight</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BZDI1NGU2ODAtNzBiNy00MWY5LWIyMGEtZjUxZjUwZmZiNjBlXkEyXkFqcGc@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>Captain Marvel</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNDBjNWY3OWYtMjk2ZS00NjA2LWE0NzAtOWQxNzBhNjZlMGYyXkEyXkFqcGc@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>Spiderman the Verse</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTAxNGQwMjEtNjdjNy00NmQwLTkwYTEtNGIwZWJjZjU5M2FmXkEyXkFqcGc@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>Happy Death Day</h1>
          </div>

          <div className="border border-purple-900 w-[200px] mt-5">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
              className="p-3"
              alt="image"
            />
            <h1>Avengers: Endgame</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
