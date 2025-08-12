import { useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../MovieCard";
import "./style.scss";

const MoviesContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, totalPages, isFetching, refetch } = useMovies(
    "",
    currentPage
  );

  return (
    <div className="main-container">
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie["id"]}
              title={movie["title"]}
              categories={movie["genre_ids"]}
              img={movie["poster_path"]}
              percentage={movie["vote_average"]}
              onClick={() => console.log(movie["title"])}
            />
          );
        })}
    </div>
  );
};

export default MoviesContainer;
