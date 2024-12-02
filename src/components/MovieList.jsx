import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { getFavorites, saveFavorites } from '../utils/localStorage';

function MovieList({ movies, activeTab, setFavoriteMovies }) {
  const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavoriteMovieIds(storedFavorites.map(movie => movie.id));
  }, []);

  const toggleFavorite = (movie) => {
    const storedFavorites = getFavorites();
    let newFavorites;

    if (favoriteMovieIds.includes(movie.id)) {
      newFavorites = storedFavorites.filter(favMovie => favMovie.id !== movie.id);
      setFavoriteMovieIds(prevIds => prevIds.filter(id => id !== movie.id));
    } else {
      newFavorites = [...storedFavorites, movie];
      setFavoriteMovieIds(prevIds => [...prevIds, movie.id]);
    }
    
    setFavoriteMovies(newFavorites);
    saveFavorites(newFavorites);
  };

  if (activeTab === 'favorites' && movies.length === 0) {
    return (
      <div className="empty-favorites">
        <h2>No Favorites Yet</h2>
        <p>Start building your movie collection by clicking the heart icon on movies you love!</p>
      </div>
    );
  }

  return (
    <ul id="movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favoriteMovieIds.includes(movie.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
}

export default MovieList;