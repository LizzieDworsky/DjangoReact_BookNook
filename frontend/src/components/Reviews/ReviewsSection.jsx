import NewReviewsForm from "./NewReviewsForm";
import ReviewsList from "./ReviewsList";

const Reviews = ({ appData }) => {
    console.log(appData);
    return (
        <div>
            <div>ReviewsSection</div> <NewReviewsForm />
            <ReviewsList reviewsList={appData.reviews} />
        </div>
    );
};

export default Reviews;
