import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="border p-2 rounded shadow">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-lg font-bold mt-2">{movie.Title}</h3>
      <p className="text-sm">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="text-blue-500 underline mt-2 block"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
