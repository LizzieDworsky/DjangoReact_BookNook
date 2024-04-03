import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({ isFav }) => {
    const updateFav = () => {
        console.log(isFav);
    };
    return (
        <div>
            <FaHeart
                className={isFav ? "isFavHeart" : "isNotFavHeart"}
                onClick={() => updateFav()}
            />
        </div>
    );
};

export default FavoriteButton;
