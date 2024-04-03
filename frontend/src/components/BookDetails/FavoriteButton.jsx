import axios from "axios";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({ favBookInfo }) => {
    const [favState, setFavState] = useState(favBookInfo.isFav);

    const updateFav = () => {
        const token = localStorage.getItem("token");
        addFav(token);
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
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <FaHeart
                className={favState ? "isFavHeart" : "isNotFavHeart"}
                onClick={() => updateFav()}
            />
        </div>
    );
};

export default FavoriteButton;
