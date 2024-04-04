import { useState } from "react";
import RatingInteractive from "./RatingInteractive";

const NewReviewsForm = ({}) => {
    const [review, setReview] = useState({
        text: "",
        rating: 0,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        console.log(review);
        setReview({
            text: "",
            rating: 0,
        });
        // Only after successful request
        // setErrors({});
    };

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        // Text validation
        if (!review.text.trim()) {
            errors.reviewText = "Please enter information about your review.";
            formIsValid = false;
        }
        // Rating validation
        if (review.rating < 1 || review.rating > 5) {
            errors.reviewRating = "Please enter a rating between 1 and 5.";
            formIsValid = false;
        }

        setErrors(errors);
        return formIsValid;
    };

    return (
        <div>
            <h2>What do you think?</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <RatingInteractive
                    rating={review.rating}
                    onRatingSelected={(rating) =>
                        setReview({ ...review, ["rating"]: rating })
                    }
                />
                {errors.reviewRating && (
                    <div className="form-error-message">
                        {errors.reviewRating}
                    </div>
                )}
                <label htmlFor="review-text">Tell us about it.</label>
                <input
                    type="text"
                    id="review-text"
                    name="text"
                    value={review.text}
                    onChange={(e) => handleChange(e)}
                />
                {errors.reviewText && (
                    <div className="form-error-message">
                        {errors.reviewText}
                    </div>
                )}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default NewReviewsForm;
