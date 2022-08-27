import styled from "styled-components";
import Icon, { ICON } from "../Icon/Icon";

const AddBoardButton = ({ onClick }) => {
    return (
        <Wrapper aria-label="Create New Board">
            <IconWrapper>
                <Icon icon={ICON.board} />
            </IconWrapper>
            + Create New Board
        </Wrapper>
    );
};

const IconWrapper = styled.div`
    height: 16px;
    width: 16px;
    filter: brightness(0) saturate(100%) invert(55%) sepia(73%) saturate(4925%)
        hue-rotate(223deg) brightness(83%) contrast(86%);
`;

const Wrapper = styled.button`
    display: flex;
    align-items: center;
    text-align: start;
    font-size: var(--size-h-m);
    line-height: var(--line-h-m);
    gap: 12px;
    padding: 16px 24px;
    border: none;
    background-color: transparent;
    color: var(--color-primary);
`;

export default AddBoardButton;
