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

        console.log(!validateForm());
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
        if (review.rating < 6 || review.rating > 0) {
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
                <label htmlFor="review-text">Tell us about it.</label>
                <input
                    type="text"
                    id="review-text"
                    name="text"
                    value={review.text}
                    onChange={(e) => handleChange(e)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default NewReviewsForm;
