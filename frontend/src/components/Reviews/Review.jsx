import axios from "axios";
import { useState } from "react";
import RatingDisplay from "./RatingDisplay";
import RatingInteractive from "./RatingInteractive";
import { useAuth } from "../../utils/useAuth";
import Modal from "../Layout/Modal";
import { FaTrash, FaPencilAlt } from "react-icons/fa";

const Review = ({ review, isCurrentUser, updateAppData }) => {
    const [showDltModal, setShowDltModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [updateReview, setUpdateReview] = useState({
        text: review.text,
        rating: review.rating,
    });
    const { token } = useAuth();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateReview({ ...updateReview, [name]: value });
    };
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
            const response = await axios.put(
                `http://localhost:8000/api/reviews/${review.id}/`,
                updateReview,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            if (response.status === 200) {
                updateAppData(review.book_id);
                setShowEditModal(false);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const modalDltActions = [
        {
            label: "Yes, delete it.",
            onClick: handleDelete,
            className: "confirm-button",
        },
        {
            label: "No, go back.",
            onClick: () => setShowDltModal(false),
            className: "cancel-button",
        },
    ];
    const modalEditActions = [
        {
            label: "Save Changes",
            onClick: handleEdit,
            className: "confirm-button",
        },
        {
            label: "Cancel",
            onClick: () => setShowEditModal(false),
            className: "cancel-button",
        },
    ];
    const editModalChildren = (
        <>
            <RatingInteractive
                rating={updateReview.rating}
                onRatingSelected={(rating) =>
                    setUpdateReview({
                        ...updateReview,
                        ["rating"]: rating,
                    })
                }
            />
            <input
                type="text"
                id="update-review-text"
                name="text"
                value={updateReview.text}
                onChange={(e) => handleChange(e)}
            />
        </>
    );
    return (
        <div className="review-card">
            <div className="review-user">{review.user.username}</div>
            <div className="review-content">
                <div className="star-rating">
                    <RatingDisplay ratingValue={review.rating} />
                </div>
                <div className="review-text">{review.text}</div>
                <div className="review-actions">
                    {isCurrentUser && (
                        <div>
                            <FaTrash
                                className="delete-icon"
                                onClick={(e) => setShowDltModal(true)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && setShowDltModal(true)
                                }
                            />
                            <Modal
                                isOpen={showDltModal}
                                title="Confirm Deletion"
                                close={() => setShowDltModal(false)}
                                actions={modalDltActions}
                            >
                                <p>
                                    Are you sure you want to delete this review?
                                </p>
                            </Modal>
                            <FaPencilAlt
                                className="edit-icon"
                                onClick={(e) => setShowEditModal(true)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && setShowEditModal(true)
                                }
                            />
                            <Modal
                                isOpen={showEditModal}
                                title="Edit Review"
                                close={() => setShowEditModal(false)}
                                actions={modalEditActions}
                            >
                                {editModalChildren}
                            </Modal>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Review;
