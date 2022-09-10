import styled from "styled-components";
import { QUERY } from "../../constants";
import Heading from "../Heading";
import { HSIZE } from "../Heading/Heading";
import Icon, { ICON } from "../Icon";

const AddBoardButton = ({ onClick, ...delegated }) => {
    return (
        <Wrapper onClick={onClick} {...delegated} aria-label="Create New Board">
            <IconWrapper icon={ICON.board} label="" />
            <Heading size={HSIZE.M}>+ Create New Board</Heading>
        </Wrapper>
    );
};

const IconWrapper = styled(Icon)`
    height: 16px;
    width: 16px;

    filter: brightness(0) saturate(100%) invert(33%) sepia(48%) saturate(811%)
        hue-rotate(203deg) brightness(107%) contrast(87%);
`;

const Wrapper = styled.button`
    display: flex;
    align-items: center;
    text-align: start;
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
