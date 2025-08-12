import { useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import MovieCard from "../MovieCard";
import "./style.scss";

// const data = [
//   {
//     title: "Movie 1",
//     categories: ["Ação", "Aventura", "Ficção Científica"],
//     img: "https://placehold.co/235x355",
//     score: 50,
//     onClick: () => console.log("Movie 1"),
//   },
//   {
//     title: "Movie 2",
//     categories: ["Ação", "Aventura", "Drama"],
//     img: "https://placehold.co/235x355",
//     score: 60,
//     onClick: () => console.log("Movie 2"),
//   },
//   {
//     title: "Movie 3",
//     categories: ["Ação", "Aventura", "Drama"],
//     img: "https://placehold.co/235x355",
//     score: 70,
//     onClick: () => console.log("Movie 3"),
//   },
//   {
//     title: "Movie 4",
//     categories: ["Ação", "Aventura", "Drama"],
//     img: "https://placehold.co/235x355",
//     score: 80,
//     onClick: () => console.log("Movie 4"),
//   },
//   {
//     title: "Movie 5",
//     categories: ["Ação", "Aventura", "Drama"],
//     img: "https://placehold.co/235x355",
//     score: 100,
//     onClick: () => console.log("Movie 5"),
//   },
// ];

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
