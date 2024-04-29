import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import BookList from "../components/BookList/BookList";
import SearchBar from "../components/SearchBar/SearchBar";

/**
 * Fetch initial books based on a default query. This loader function could be adapted
 * to accept dynamic queries based on user input or other criteria.
 */
export async function getBooksLoader() {
    return getBooksSearch("hobbit");
}

/**
 * Performs an API request to Google Books API to fetch books based on a search query.
 * Handles errors by logging and returning an empty array as a fallback.
 *
 * @param {string} query - The search term used to query the Google Books API.
 * @returns {Array} An array of books or an empty array if an error occurs.
 */
async function getBooksSearch(query) {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=15`
        );
        return response.data.items || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * HomePage component that displays a search bar and a list of books.
 * It uses data loaded through `useLoaderData` or an empty array as an initial state.
 * It provides functionality to search and update the list of books displayed.
 */
export default function HomePage() {
    const data = useLoaderData() || [];
    const [books, setBooks] = useState(data);

    /**
     * Fetch books based on the search query provided and update the state.
     *
     * @param {string} query - The search term used to fetch new books.
     */
    const fetchBooks = async (query) => {
        let tempBooks = await getBooksSearch(query);
        setBooks(tempBooks);
    };

    // Display a message if no books match the search or initial query.
    if (books.length === 0) {
        return (
            <div className="home-fav-div-no-books">
                There are no books matching this description.
            </div>
        );
    }

    // Render the SearchBar and BookList components, passing `fetchBooks` to allow for dynamic searching.
    return (
        <div>
            <SearchBar fetchBooks={fetchBooks} />
            <BookList books={books} />
        </div>
    );
}
