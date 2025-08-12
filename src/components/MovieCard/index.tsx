import ProgressBar from "../ProgressBar";
import "./style.scss";

interface Props {
  title: string;
  categories: string[];
  img: string;
  percentage: number;
  onClick: () => void;
}

const MovieCard = ({ title, categories, img, percentage, onClick }: Props) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <div className="details">
        <h3>{title}</h3>
        <p>{categories.join(", ")}</p>
      </div>
      <img src={"https://image.tmdb.org/t/p/w500/" + img} alt={title} />
      <div className="progress-bar">
        <ProgressBar percentage={Number((percentage * 10).toFixed(0))} />
      </div>
    </div>
  );
};

export default MovieCard;
