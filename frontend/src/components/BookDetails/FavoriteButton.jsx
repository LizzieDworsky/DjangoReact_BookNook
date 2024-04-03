import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/useAuth";
import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({ favBookInfo }) => {
    const [favState, setFavState] = useState(favBookInfo.isFav);
    const [favoriteObj, setFavoriteObj] = useState(null);
    const { isAuthenticated } = useAuth();
    const token = localStorage.getItem("token");

    const toggleFav = () => {
        if (isAuthenticated) {
            favState ? deleteFav(token) : addFav(token);
        }
    };
    useEffect(() => {
        if (isAuthenticated) {
            getFav(token);
        }
    }, []);
    const getFav = async (token) => {
        try {
            const response = await axios.get(
                `http://localhost:8000/api/favorites/${favBookInfo.bookId}/`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (response.status === 200) {
                setFavoriteObj(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const addFav = async (token) => {
        try {
            const response = await axios.post(
                `http://localhost:8000/api/favorites/${favBookInfo.bookId}/`,
                {
                    title: favBookInfo.title,
                    thumbnail_url: favBookInfo.thumbnailUrl,
                },
                { headers: { Authorization: "Bearer " + token } }
            );
            if (response.status === 201) {
                setFavState(!favState);
                setFavoriteObj(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const deleteFav = async (token) => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/favorites/${favoriteObj.id}/`,
                { headers: { Authorization: "Bearer " + token } }
            );
            if (response.status === 204) {
                setFavState(!favState);
                setFavoriteObj(null);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <FaHeart
                className={favState ? "isFavHeart" : "isNotFavHeart"}
                onClick={() => toggleFav()}
            />
        </div>
    );
};

export default FavoriteButton;
