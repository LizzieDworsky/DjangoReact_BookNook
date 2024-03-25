import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ fetchBooks }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchBooks(searchQuery);
    };

    return (
        <div className="search-bar">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="search-input"
                    type="text"
                    name="search"
                    placeholder="Search for a book."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
