import axios from "axios";

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
    return <div>FavoritesPage</div>;
}
