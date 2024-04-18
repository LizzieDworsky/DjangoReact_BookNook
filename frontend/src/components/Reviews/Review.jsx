import axios from "axios";
import { useState } from "react";
import RatingDisplay from "./RatingDisplay";
import RatingInteractive from "./RatingInteractive";
import { useAuth } from "../../utils/useAuth";
import Modal from "../Layout/Modal";

const Review = ({ review, isCurrentUser, updateAppData }) => {
    const [showDltModal, setShowDltModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [updateReview, setUpdateReview] = useState({
        text: review.text,
        rating: review.rating,
    });
    const { token } = useAuth();
    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `http://localhost:8000/api/reviews/${review.id}/`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if (response.status === 204) {
                updateAppData(review.book_id);
                setShowDltModal(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleEdit = async () => {
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
    const modalDltActions = [
        { label: "Yes, delete it.", onClick: handleDelete, className: "" },
        {
            label: "No, go back.",
            onClick: () => setShowDltModal(false),
            className: "",
        },
    ];
    const modalEditActions = [
        { label: "Save Changes", onClick: handleEdit, className: "" },
        {
            label: "Cancel",
            onClick: () => setShowEditModal(false),
            className: "",
        },
    ];
    return (
        <div>
            <p className="review-username">{review.user.username}</p>
            <RatingDisplay ratingValue={review.rating} />
            <p className="review-text">{review.text}</p>
            {isCurrentUser && (
                <div>
                    <button onClick={(e) => setShowDltModal(true)}>
                        Delete
                    </button>
                    <Modal
                        isOpen={showDltModal}
                        title="Confirm Deletion"
                        close={() => setShowDltModal(false)}
                        actions={modalDltActions}
                    >
                        <p>Are you sure you want to delete this review?</p>
                    </Modal>
                    <button onClick={(e) => setShowEditModal(true)}>
                        Edit
                    </button>
                    <Modal
                        isOpen={showEditModal}
                        title="Edit Review"
                        close={() => setShowEditModal(false)}
                        actions={modalEditActions}
                    >
                        <RatingInteractive
                            rating={updateReview.rating}
                            onRatingSelected={(rating) =>
                                setUpdateReview({
                                    ...updateReview,
                                    ["rating"]: rating,
                                })
                            }
                        />
                    </Modal>
                </div>
            )}
        </div>
    );
};

export default Review;
