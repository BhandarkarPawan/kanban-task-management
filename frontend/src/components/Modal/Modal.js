import ReactModal from "react-modal";
import styled from "styled-components";

const Modal = ({
    isOpen,
    toggleModal,
    children,
    center = false,
    ...delegated
}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            className="_"
            overlayClassName="_"
            ariaHideApp={false}
            {...delegated}
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
    &:focus {
        // Do not highlight the whole modal
        outline: none;
    }
`;

const OverlayStyle = styled.div`
    position: absolute;
    display: grid;
    place-items: center;
    overflow: auto;

    /* Improve Scrollbar styles */
    &::-webkit-scrollbar {
        /* ... */
        background-color: transparent;
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--color-primary-light);
        border-radius: 5000px;
        /* ... */
    }

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-overlay);
    padding: 16px;
`;

export default Modal;
