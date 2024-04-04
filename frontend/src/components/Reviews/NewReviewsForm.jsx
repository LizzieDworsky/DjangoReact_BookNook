import { useState } from "react";
import RatingInteractive from "./RatingInteractive";

const NewReviewsForm = ({}) => {
    const [review, setReview] = useState({
        text: "",
        rating: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(review);
    };

    return (
        <div>
            <h2>What do you think?</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <RatingInteractive
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
