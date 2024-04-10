import NewReviewsForm from "./NewReviewsForm";
import ReviewsList from "./ReviewsList";
import { useAuth } from "../../utils/useAuth";

const Reviews = ({ appData }) => {
    const { isAuthenticated } = useAuth();

    const reviewFormSection = isAuthenticated ? (
        <NewReviewsForm />
    ) : (
        <div>Log in to leave a review.</div>
    );

    const reviewListSection =
        appData.reviews.length > 0 ? (
            <ReviewsList reviewsList={appData.reviews} />
        ) : (
            <div>Be the first to leave a review.</div>
        );
    console.log(reviewListSection);

    return (
        <div>
            {reviewFormSection}
            {reviewListSection}
        </div>
    );
};

export default Reviews;
