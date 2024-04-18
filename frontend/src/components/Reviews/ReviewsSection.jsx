import NewReviewsForm from "./NewReviewsForm";
import ReviewsList from "./ReviewsList";
import { useAuth } from "../../utils/useAuth";

const ReviewsSection = ({ appData, updateAppData }) => {
    const { isAuthenticated } = useAuth();

    const reviewFormSection = isAuthenticated ? (
        <NewReviewsForm
            book_id={appData.book_id}
            updateAppData={updateAppData}
        />
    ) : (
        <div>Log in to leave a review.</div>
    );
    const reviewListSection =
        appData.reviews.length > 0 ? (
            <ReviewsList reviewsList={appData.reviews} />
        ) : (
            <div>Be the first to leave a review.</div>
        );

    return (
        <div>
            {reviewFormSection}
            {reviewListSection}
        </div>
    );
};

export default ReviewsSection;
