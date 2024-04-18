import "./Modal.css";

const Modal = ({ isOpen, close, title, children, actions }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>{title}</h2>
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
                <button onClick={close} className="modal-close-btn">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
