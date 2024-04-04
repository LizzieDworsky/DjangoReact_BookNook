import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const RatingDisplay = ({ ratingValue }) => {
    const fullStars = Math.floor(ratingValue);
    const halfStar = ratingValue % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="rate-full-star" />);
    }
    if (halfStar) {
        stars.push(<FaStarHalfAlt key={"half"} className="rate-half-star" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <FaRegStar key={`empty-${i}`} className="rate-empty-star" />
        );
    }

    return <div>{stars}</div>;
};

export default RatingDisplay;
