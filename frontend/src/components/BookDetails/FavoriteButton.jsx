import axios from "axios";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({ favBookInfo }) => {
    const [favState, setFavState] = useState(favBookInfo.isFav);
    // const [favoriteObj, setFavoriteObj] = useState(null);

    const toggleFav = () => {
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
                // setFavoriteObj(response.data);
                // console.log(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };
    // const deleteFav = async (token) => {
    //     try {
    //         const response = await axios.delete(
    //             `http://localhost:8000/api/favorites/primaryKey/`,
    //             { headers: { Authorization: "Bearer " + token } }
    //         );
    //         if (response.status === 204) {
    //             setFavState(!favState);
    //             setFavoriteObj(null)
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
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
