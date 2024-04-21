import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingInteractive = ({ onRatingSelected, rating }) => {
    const [selectedRating, setSelectedRating] = useState(rating);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        setSelectedRating(rating);
    }, [rating]);

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    const displayStarRating = () => {
        return [1, 2, 3, 4, 5].map((index) => (
            <FaStar
                key={index}
                className={
                    index <= (hoverRating || selectedRating)
                        ? "star-filled"
                        : "star-empty"
                }
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                    setSelectedRating(index);
                    onRatingSelected(index);
                }}
            />
        ));
    };

    return <div className="RatingInteractive">{displayStarRating()}</div>;
};

export default RatingInteractive;
