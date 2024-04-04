import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const RatingInteractive = ({ onRatingSelected, rating }) => {
    const [selectedRating, setSelectedRating] = useState(rating);

    useEffect(() => {
        setSelectedRating(rating);
    }, [rating]);

    const displayStarRating = () => {
        return [1, 2, 3, 4, 5].map((index) => (
            <FaStar
                key={index}
                color={index <= selectedRating ? "#ffc107" : "#e4e5e9"}
                onClick={() => {
                    setSelectedRating(index);
                    onRatingSelected(index);
                }}
            />
        ));
    };

    return <div>{displayStarRating()}</div>;
};

export default RatingInteractive;
