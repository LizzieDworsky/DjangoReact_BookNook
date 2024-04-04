import RatingDisplay from "./RatingDisplay";

const Review = ({ review }) => {
    return (
        <div>
            <p className="review-username">{review.user.username}</p>
            <RatingDisplay ratingValue={review.rating} />
            <p className="review-text">{review.text}</p>
        </div>
    );
};

export default Review;
