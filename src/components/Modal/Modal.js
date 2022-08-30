import ReactModal from "react-modal";
import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardGroup from "../BoardGroup";

const Modal = ({
    boards,
    isOpen,
    toggleModal,
    handleSelectBoard,
    selectedBoard,
    children,
}) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            className="_"
            overlayClassName="_"
            ariaHideApp={false}
            contentElement={(props) => (
                <ModalStyle {...props}>
                    <BoardGroup
                        boards={boards}
                        selectedBoard={selectedBoard}
                        setSelectedBoard={handleSelectBoard}
                    >
                        {children}
                    </BoardGroup>
                </ModalStyle>
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

    @media ${QUERY.tabletAndUp} {
        display: none;
    }
`;

const OverlayStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-overlay);
    margin-top: 64px;

    @media ${QUERY.tabletAndUp} {
        display: none;
    }
`;

export default Modal;
