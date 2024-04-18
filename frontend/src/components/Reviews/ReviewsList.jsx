import Review from "./Review";
import { useAuth } from "../../utils/useAuth";

const ReviewsList = ({ reviewsList }) => {
    const { user } = useAuth();

    const reviews = reviewsList.map((review) => (
        <Review
            key={review.id}
            review={review}
            isCurrentUser={user && user.user_id === review.user.id}
        />
    ));
    return <div>{reviews}</div>;
};

export default ReviewsList;
