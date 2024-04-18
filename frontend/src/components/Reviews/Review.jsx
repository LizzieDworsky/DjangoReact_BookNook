import axios from "axios";
import { useState } from "react";
import RatingDisplay from "./RatingDisplay";
import { useAuth } from "../../utils/useAuth";
import Modal from "../Layout/Modal";

const Review = ({ review, isCurrentUser, updateAppData }) => {
    const [showModal, setShowModal] = useState(false);
    const [updateReview, setUpdateReview] = useState({
        text: "",
        rating: 0,
    });
    const { token } = useAuth();
    console.log(review);
    const handleDelete = async (e, review) => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/reviews/${review.id}/`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if (response.status === 204) {
                updateAppData(review.book_id);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleEdit = async (e, review) => {
        try {
            console.log(review);
            // const response = await axios.put(
            //     `http://localhost:8000/api/reviews/${review.id}/`, updateReview
            //     {
            //         headers: { Authorization: `Bearer ${token}` },
            //     }
            // );
            // if (response.status === 200) {
            //     updateAppData(review.book_id);
            // }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <p className="review-username">{review.user.username}</p>
            <RatingDisplay ratingValue={review.rating} />
            <p className="review-text">{review.text}</p>
            {isCurrentUser && (
                <div>
                    <button onClick={(e) => setShowModal(true)}>Delete</button>
                    <Modal
                        isOpen={showModal}
                        title="Confirm Deletion"
                        close={() => setShowModal(false)}
                    ></Modal>
                    <button onClick={(e) => handleEdit(e, review)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default Review;
