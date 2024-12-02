function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    onSearch(searchInput.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        name="search"
        id="search-input"
        placeholder="Search by name..."
        autoComplete="off"
        onKeyPress={handleKeyPress}
      />
      <button id="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;