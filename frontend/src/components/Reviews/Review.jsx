import RatingDisplay from "./RatingDisplay";

const Review = ({ review }) => {
    console.log(review);

    return (
        <div>
            <RatingDisplay ratingValue={review.rating} />
        </div>
    );
};

export default Review;
