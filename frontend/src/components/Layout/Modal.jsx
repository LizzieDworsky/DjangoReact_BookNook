import "./Modal.css";

const Modal = ({ isOpen, close, title, children, actions }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>{title}</h2>
                <button onClick={close} className="modal-close-btn">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
