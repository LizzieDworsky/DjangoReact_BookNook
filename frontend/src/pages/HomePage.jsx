import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import BookList from "../components/BookList/BookList";
import SearchBar from "../components/SearchBar/SearchBar";

export async function getBooksLoader() {
    return getBooksSearch("hobbit");
}

async function getBooksSearch(query) {
    try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
        );
        return response.data.items || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default function HomePage() {
    const data = useLoaderData() || [];
    const [books, setBooks] = useState(data);

    const fetchBooks = async (query) => {
        let tempBooks = await getBooksSearch(query);
        setBooks(tempBooks);
    };

    if (books.length === 0) {
        return (
            <div className="home-div-no-books">
                There are no books matching this description.
            </div>
        );
    }

    return (
        <div>
            <SearchBar fetchBooks={fetchBooks} />
            <BookList books={books} />
        </div>
    );
}
