import { useRef } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const inputRef = useRef(null);

  const handleClearSearch = () => {
    setSearchQuery('');
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="search"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <button onClick={handleClearSearch}>×</button>
      )}
    </div>
  );
};

export default SearchBar;