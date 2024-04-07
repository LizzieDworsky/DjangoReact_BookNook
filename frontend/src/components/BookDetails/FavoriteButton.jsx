import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/useAuth";
import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({ favBookInfo }) => {
    const [favState, setFavState] = useState(favBookInfo.isFav);
    const [favoriteObj, setFavoriteObj] = useState(null);
    const { isAuthenticated, token } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            fetchFavorite();
        }
    }, []);
    const apiRequest = async (method, endpoint, data = {}) => {
        const url = `http://localhost:8000/api/${endpoint}`;
        const headers = { Authorization: `Bearer ${token}` };
        try {
            const response = await axios({ method, url, data, headers });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
    const fetchFavorite = async () => {
        const response = await apiRequest(
            "get",
            `favorites/${favBookInfo.bookId}/`
        );
        if (response) {
            setFavoriteObj(response);
        }
    };
    const toggleFav = async () => {
        if (!isAuthenticated) return;

        if (favState) {
            const success = await apiRequest(
                "delete",
                `favorites/${favoriteObj.id}/`
            );
            if (success) {
                setFavState(false);
                setFavoriteObj(null);
            }
        } else {
            const data = {
                title: favBookInfo.title,
                thumbnail_url: favBookInfo.thumbnailUrl,
            };
            const response = await apiRequest(
                "post",
                `favorites/${favBookInfo.bookId}/`,
                data
            );
            if (response) {
                setFavState(true);
                setFavoriteObj(response);
            }
        }
    };
    return (
        <div className="favorite-button">
            <FaHeart
                className={favState ? "isFavHeart" : "isNotFavHeart"}
                onClick={() => toggleFav()}
            />
        </div>
    );
};

export default FavoriteButton;
