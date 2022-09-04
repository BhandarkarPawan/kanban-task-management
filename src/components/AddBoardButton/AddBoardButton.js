import styled from "styled-components";
import { QUERY } from "../../constants";
import Icon, { ICON } from "../Icon/Icon";

const AddBoardButton = ({ onClick, ...delegated }) => {
    return (
        <Wrapper {...delegated} aria-label="Create New Board">
            <IconWrapper icon={ICON.board} label="" />+ Create New Board
        </Wrapper>
    );
};

const IconWrapper = styled(Icon)`
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
    width: 100%;
    cursor: pointer;

    @media ${QUERY.laptopAndUp} {
        padding-left: 32px;
    }
`;

export default AddBoardButton;
