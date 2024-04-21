import { MdClose } from "react-icons/md";
import "./Modal.css";

const Modal = ({ isOpen, close, title, children, actions }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <MdClose
                        onClick={close}
                        className="modal-close-btn"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter"}
                    />
                </div>
                {children}
                <div className="modal-actions">
                    {actions.map((action, index) => (
                        <button
                            key={index}
                            onClick={action.onClick}
                            className={action.className}
                        >
                            {action.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;
