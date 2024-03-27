import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookList from "../components/BookList/BookList";

export async function getFavoritesLoader() {
    return getFavoritesSearch();
}

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

export default function FavoritesPage() {
    const data = useLoaderData() || [];
    const [favorites, setFavorites] = useState(data);

    if (favorites.length === 0) {
        return (
            <div className="home-fav-div-no-books">
                You currently have no books favorited.
            </div>
        );
    }

    return <BookList books={favorites} isFavorite={true} />;
}
