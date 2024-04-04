import RatingInteractive from "./RatingInteractive";

const NewReviewsForm = ({}) => {
    return (
        <div>
            <div>NewReviewsForm</div>
            <RatingInteractive
                onRatingSelected={(rating) => console.log(rating)}
            />
        </div>
    );
};

export default NewReviewsForm;
