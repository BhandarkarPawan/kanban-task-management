import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { QUERY } from "../../constants";
import BoardGroup from "../BoardGroup";
import Icon from "../Icon";

const BoardSelect = ({ boards, selectedBoard, setSelectedBoard }) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const handleSelectBoard = (board) => {
        setSelectedBoard(board);
        setIsOpen(false);
    };

    return (
        <Wrapper aria-label="Select Board">
            <Select onClick={toggleModal}>
                {selectedBoard.name}
                <IconWrapper>
                    {isOpen ? (
                        <Icon icon="up" label="Close Menu" />
                    ) : (
                        <Icon icon="down" label="Expand Menu" />
                    )}
                </IconWrapper>
            </Select>
            <Label disabled>{selectedBoard.name}</Label>
            <Modal
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
                        />
                    </ModalStyle>
                )}
                overlayElement={(props, contentElement) => (
                    <OverlayStyle {...props}>{contentElement}</OverlayStyle>
                )}
            ></Modal>
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

const ModalStyle = styled.div`
    max-width: fit-content;
    border-radius: var(--r-l);
    overflow: hidden;

    // TODO: Find a better solution
    position: absolute;
    top: 80px;
    left: 53px;

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
    }

    @media ${QUERY.laptopAndUp} {
        font-size: var(--size-h-xl);
        line-height: var(--line-h-xl);
    }
`;

const OverlayStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-overlay);

    @media ${QUERY.tabletAndUp} {
        display: none;
    }
`;

export default BoardSelect;
