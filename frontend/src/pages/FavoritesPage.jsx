import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookList from "../components/BookList/BookList";

/**
 * Loader function to fetch the user's favorite books.
 * @returns {Array} Array of favorite books or an empty array on failure.
 */
export async function getFavoritesLoader() {
    return getFavoritesSearch();
}

/**
 * Fetches favorite books from the backend using an authenticated request.
 * Uses the user's stored token for authorization.
 * @returns {Array} Array of favorite books or an empty array on error.
 */
async function getFavoritesSearch() {
    try {
        let token = localStorage.getItem("token");
        if (!token) {
            return [];
        }
        const response = await axios.get(
            "http://localhost:8000/api/favorites/",
            {
                headers: { Authorization: "Bearer " + token },
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Component to display the user's favorite books.
 * Uses loader data as initial state and updates if new data is fetched.
 */
export default function FavoritesPage() {
    const data = useLoaderData() || [];
    const [favorites, setFavorites] = useState(data);

    // Display message if no favorites are found
    if (favorites.length === 0) {
        return (
            <div className="home-fav-div-no-books">
                You currently have no books favorited.
            </div>
        );
    }

    // Render the list of favorite books
    return <BookList books={favorites} isFavorite={true} />;
}
