import { useState } from "react";

const SearchBar = ({ fetchBooks }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchBooks(searchQuery);
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for a book."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchBar;
