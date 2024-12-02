import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <li className="card">
      <img
        className="poster"
        src={movie.poster_path
          ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
          : "https://w7.pngwing.com/pngs/116/765/png-transparent-clapperboard-computer-icons-film-movie-poster-angle-text-logo-thumbnail.png"
        }
        alt={movie.title}
      />
      <p className="title">{movie.title}</p>
      <section className="vote-favoriteIcon">
        <section className="vote">
          <p className="vote-count">{movie.vote_count}</p>
          <p className="vote-average">{movie.vote_average}</p>
        </section>
        <FontAwesomeIcon
          icon={isFavorite ? fasHeart : farHeart}
          className="favorite-icon"
          onClick={() => onToggleFavorite(movie)}
        />
      </section>
    </li>
  );
}

export default MovieCard;