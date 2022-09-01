import ReactModal from "react-modal";
import styled from "styled-components";

const Modal = ({ isOpen, toggleModal, children }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            className="_"
            overlayClassName="_"
            ariaHideApp={false}
            contentElement={(props) => (
                <ModalStyle {...props}>{children}</ModalStyle>
            )}
            overlayElement={(props, contentElement) => (
                <OverlayStyle {...props}>{contentElement}</OverlayStyle>
            )}
        ></ReactModal>
    );
};

const ModalStyle = styled.div`
    max-width: fit-content;
    border-radius: var(--r-l);
    overflow: hidden;

    // TODO: Find a better solution
    position: absolute;
    top: 16px;
    left: 53px;
`;

const OverlayStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-overlay);
    margin-top: 64px;
`;

export default Modal;
