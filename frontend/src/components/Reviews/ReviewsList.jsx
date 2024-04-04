import Review from "./Review";

const ReviewsList = ({ reviewsList }) => {
    const reviews = reviewsList.map((review) => (
        <Review key={review.id} review={review} />
    ));
    return <div>{reviews}</div>;
};

export default ReviewsList;
