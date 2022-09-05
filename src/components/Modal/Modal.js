import ReactModal from "react-modal";
import styled from "styled-components";
import { QUERY } from "../../constants";

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
                <ModalStyle center={center} {...props}>
                    {children}
                </ModalStyle>
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

    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-overlay);
    padding: 16px;

    @media ${QUERY.tabletAndUp} {
        top: 75px;
    }

    @media ${QUERY.laptopAndUp} {
        top: 91px;
    }
`;

export default Modal;
