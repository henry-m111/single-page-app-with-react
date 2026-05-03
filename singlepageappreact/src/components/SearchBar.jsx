function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        placeholder="Search projects..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;