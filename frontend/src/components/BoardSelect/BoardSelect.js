import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardGroup from "../BoardGroup";
import Heading, { HSIZE } from "../Heading";
import Icon, { ICON } from "../Icon";

const BoardSelect = ({
    boards,
    selectedBoard,
    setSelectedBoard,
    children,
    toggleAddBoard,
    ...delegated
}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const handleSelectBoard = (board) => {
        setSelectedBoard(board);
        setIsOpen(false);
        console.log("bruh");
    };

    const icon = isOpen ? ICON.up : ICON.down;
    const label = isOpen ? "Close Menu" : "Open Menu";

    return (
        <Wrapper {...delegated} aria-label="Select Board">
            <Select onClick={toggleModal}>
                <Heading size={HSIZE.L}>
                    {/* TODO: Refactor */}
                    {selectedBoard ? selectedBoard.name : "Select Board"}
                </Heading>
                <IconWrapper icon={icon} label={label} />
            </Select>
            <Label disabled>
                {selectedBoard ? selectedBoard.name : "Select Board"}
            </Label>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className="_"
                overlayClassName="_"
                ariaHideApp={false}
                contentElement={(props) => (
                    <ModalStyle {...props}>
                        {" "}
                        <BoardGroupWrapper
                            boards={boards}
                            selectedBoard={selectedBoard}
                            setSelectedBoard={handleSelectBoard}
                            toggleAddBoard={toggleAddBoard}
                        >
                            {children}
                        </BoardGroupWrapper>
                    </ModalStyle>
                )}
                overlayElement={(props, contentElement) => (
                    <OverlayStyle {...props}>{contentElement}</OverlayStyle>
                )}
            ></ReactModal>
        </Wrapper>
    );
};

const ModalStyle = styled.div`
    position: absolute;
    top: 16px;
    left: 53px;

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

const BoardGroupWrapper = styled(BoardGroup)`
    position: absolute;
`;

const Wrapper = styled.div`
    position: relative;
`;

const IconWrapper = styled(Icon)`
    height: 4px;
    width: 8px;

    @media ${QUERY.tabletAndUp} {
        display: none;
    }
`;

const Select = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 0px;

    @media ${QUERY.tabletAndUp} {
        display: none;
    }
`;

const Label = styled(Select)`
    display: none;
    font-size: calc(1rem * 20 / 16);
    line-height: calc(1rem * 25.2 / 16);

    @media ${QUERY.tabletAndUp} {
        display: revert;
        padding-top: 4px;
    }

    @media ${QUERY.laptopAndUp} {
        font-size: var(--size-h-xl);
        line-height: var(--line-h-xl);
    }
`;

export default BoardSelect;
