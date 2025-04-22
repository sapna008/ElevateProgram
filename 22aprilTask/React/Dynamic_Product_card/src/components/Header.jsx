import SearchBar from './SearchBar';

const Header = ({ favoritesCount, searchQuery, setSearchQuery }) => {
  return (
    <header>
      <div>
        <div>
          <h1>ProductShop</h1>
          <div>
            <span>&#9825;</span>
            {favoritesCount > 0 && (
              <span>{favoritesCount}</span>
            )}
          </div>
        </div>
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </header>
  );
};

export default Header;