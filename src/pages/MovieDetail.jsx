import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie).catch(console.error);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <div className="p-4 flex">
        <div>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full max-w-sm mx-auto"
          />
        </div>
        <div className="leading-8">
          <h1 className="text-2xl font-bold mt-4 ml-4">{movie.Title}</h1>
          <p className="ml-4">{movie.Plot}</p>
          <p className="ml-4">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="ml-4">
            <strong>Cast:</strong> {movie.Actors}
          </p>
          <p className="ml-4">
            <strong> Ratings: ⭐</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
      <Link
        to={"/"}
        className="font-bold bg-pink-800 rounded-lg px-3 py-1 text-white ml-4"
      >
        BACK TO HOME
      </Link>
    </>
  );
};

export default MovieDetailsPage;
