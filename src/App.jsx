import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SortingOptions from './components/SortingOptions';
import Tabs from './components/Tabs';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import { fetchMovies, searchMovies } from './utils/api';
import { getFavorites } from './utils/localStorage';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavoriteMovies(storedFavorites);
  }, []);

  useEffect(() => {
    if (activeTab === 'all') {
      const getMovies = async () => {
        const result = await fetchMovies(currentPage);
        setMovies(result);
      };
      getMovies();
    }
  }, [currentPage, activeTab]);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    if (activeTab === 'all') {
      const results = await searchMovies(term);
      setMovies(results);
    }
  };

  const getDisplayedMovies = () => {
    const moviesToDisplay = activeTab === 'favorites' ? favoriteMovies : movies;
    if (activeTab === 'favorites' && searchTerm) {
      return moviesToDisplay.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return moviesToDisplay;
  };

  const showPagination = activeTab === 'all';
  const displayedMovies = getDisplayedMovies();

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <SortingOptions 
        movies={displayedMovies} 
        setMovies={activeTab === 'favorites' ? setFavoriteMovies : setMovies} 
      />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} onTabChange={() => setSearchTerm('')} />
      <div className="movie-list-pagination-btns">
        <MovieList 
          movies={displayedMovies}
          activeTab={activeTab}
          setFavoriteMovies={setFavoriteMovies}
        />
        {showPagination && (
          <Pagination 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            maxPages={445}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;