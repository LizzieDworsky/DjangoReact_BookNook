import Review from "./Review";

const ReviewsList = ({ reviewsList }) => {
    console.log(reviewsList);
    const reviews = reviewsList.map((review) => <Review review={review} />);
    return (
        <div>
            <div>ReviewsList</div>
            {reviews}
        </div>
    );
};

export default ReviewsList;
