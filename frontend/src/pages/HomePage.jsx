import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import BookList from "../components/BookList/BookList";

export async function getBooksSearch() {
    try {
        const response = await axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=hobbit"
        );
        return response.data.items;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default function HomePage() {
    const data = useLoaderData() || [];
    const [books, setBooks] = useState(data);

    if (books.length === 0) {
        return (
            <div className="home-div-no-books">
                There are no books matching this description.
            </div>
        );
    }

    return (
        <div>
            <BookList books={books} />
        </div>
    );
}
