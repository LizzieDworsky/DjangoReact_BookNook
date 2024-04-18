import axios from "axios";
import RatingDisplay from "./RatingDisplay";
import { useAuth } from "../../utils/useAuth";

const Review = ({ review, isCurrentUser, updateAppData }) => {
    const { token } = useAuth();
    console.log(review);
    const handleDelete = async (e, review) => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/reviews/${review.id}/`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if (response.status === 204) {
                updateAppData(review.book_id);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <p className="review-username">{review.user.username}</p>
            <RatingDisplay ratingValue={review.rating} />
            <p className="review-text">{review.text}</p>
            {isCurrentUser && (
                <button onClick={(e) => handleDelete(e, review)}>Delete</button>
            )}
        </div>
    );
};

export default Review;
