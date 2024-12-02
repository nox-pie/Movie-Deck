import { useState } from 'react';

function SortingOptions({ movies, setMovies }) {
  const [firstSortByDateClick, setFirstSortByDateClick] = useState(true);
  const [firstSortByRatingClick, setFirstSortByRatingClick] = useState(true);

  const sortByDate = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (firstSortByDateClick) {
        return new Date(a.release_date) - new Date(b.release_date);
      }
      return new Date(b.release_date) - new Date(a.release_date);
    });
    setMovies(sortedMovies);
    setFirstSortByDateClick(!firstSortByDateClick);
  };

  const sortByRating = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (firstSortByRatingClick) {
        return a.vote_average - b.vote_average;
      }
      return b.vote_average - a.vote_average;
    });
    setMovies(sortedMovies);
    setFirstSortByRatingClick(!firstSortByRatingClick);
  };

  return (
    <div className="sorting-options">
      <button id="sort-by-date" onClick={sortByDate}>
        {firstSortByDateClick
          ? "Sort by date (oldest to latest)"
          : "Sort by date (latest to oldest)"}
      </button>
      <button id="sort-by-rating" onClick={sortByRating}>
        {firstSortByRatingClick
          ? "Sort by rating (least to most)"
          : "Sort by rating (most to least)"}
      </button>
    </div>
  );
}

export default SortingOptions;