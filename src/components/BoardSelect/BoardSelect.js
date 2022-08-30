import { useState } from "react";
import styled from "styled-components";
import { QUERY } from "../../constants";
import Icon, { ICON } from "../Icon";
import Modal from "../Modal";

const BoardSelect = ({ boards, selectedBoard, setSelectedBoard, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const handleSelectBoard = (board) => {
        setSelectedBoard(board);
        setIsOpen(false);
        console.log("bruh");
    };

    return (
        <Wrapper aria-label="Select Board">
            <Select onClick={toggleModal}>
                {selectedBoard.name}
                <IconWrapper>
                    {isOpen ? (
                        <Icon icon={ICON.up} label="Close Menu" />
                    ) : (
                        <Icon icon={ICON.down} label="Expand Menu" />
                    )}
                </IconWrapper>
            </Select>
            <Label disabled>{selectedBoard.name}</Label>
            <Modal
                boards={boards}
                isOpen={isOpen}
                toggleModal={toggleModal}
                handleSelectBoard={handleSelectBoard}
                selectedBoard={selectedBoard}
            >
                {children}
            </Modal>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
`;

const IconWrapper = styled.div`
    height: 4px;
    width: 8px;

    @media ${QUERY.tabletAndUp} {
        display: none;
    }
`;

const Select = styled.button`
    border: none;
    background-color: transparent;
    font-size: var(--size-h-l);
    line-height: var(--line-h-l);
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
    font-size: calc(1rem * 20 / 18);
    line-height: calc(1rem * 25.2 / 18);

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
