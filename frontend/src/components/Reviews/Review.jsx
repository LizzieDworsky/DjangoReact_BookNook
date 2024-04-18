import RatingDisplay from "./RatingDisplay";

const Review = ({ review, isCurrentUser }) => {
    console.log(isCurrentUser);
    return (
        <div>
            <p className="review-username">{review.user.username}</p>
            <RatingDisplay ratingValue={review.rating} />
            <p className="review-text">{review.text}</p>
            <button onClick={console.log(review.id)}>Delete</button>
        </div>
    );
};

export default Review;
