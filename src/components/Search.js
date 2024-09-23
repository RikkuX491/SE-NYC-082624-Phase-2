function Search({updateSearchText, searchText}){

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Pets:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={updateSearchText}
                value={searchText}
            />
        </div>
    )
}

export default Search;