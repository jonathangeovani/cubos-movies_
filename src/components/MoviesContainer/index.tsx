import MovieCard from "../MovieCard";
import "./style.scss";

const data = [
  {
    title: "Movie 1",
    categories: ["Ação", "Aventura", "Ficção Científica"],
    img: "https://placehold.co/235x355",
    score: 50,
    onClick: () => console.log("Movie 1"),
  },
  {
    title: "Movie 2",
    categories: ["Ação", "Aventura", "Drama"],
    img: "https://placehold.co/235x355",
    score: 60,
    onClick: () => console.log("Movie 2"),
  },
  {
    title: "Movie 3",
    categories: ["Ação", "Aventura", "Drama"],
    img: "https://placehold.co/235x355",
    score: 70,
    onClick: () => console.log("Movie 3"),
  },
  {
    title: "Movie 4",
    categories: ["Ação", "Aventura", "Drama"],
    img: "https://placehold.co/235x355",
    score: 80,
    onClick: () => console.log("Movie 4"),
  },
  {
    title: "Movie 5",
    categories: ["Ação", "Aventura", "Drama"],
    img: "https://placehold.co/235x355",
    score: 100,
    onClick: () => console.log("Movie 5"),
  },
];

const MoviesContainer = () => {
  return (
    <div className="main-container">
      {data &&
        data.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              title={movie.title}
              categories={movie.categories}
              img={movie.img}
              percentage={movie.score}
              onClick={movie.onClick}
            />
          );
        })}
    </div>
  );
};

export default MoviesContainer;
