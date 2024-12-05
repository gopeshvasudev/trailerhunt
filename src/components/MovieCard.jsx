import React from "react";

const MovieCard = ({ data }) => {
  const { poster_path } = data;

  return (
    <div className="w-[250px] h-[300px] bg-zinc-800 rounded-lg overflow-hidden shrink-0">
      <figure className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="w-full h-full"
        />
      </figure>
    </div>
  );
};

export default MovieCard;
