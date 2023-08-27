import { useState } from "react";
import styled from "styled-components";
import Icon, { ICON } from "../Icon";
import TextInput from "../TextInput";

const DynamicTextInput = ({ value, onChange, clearInput, ...delegated }) => {
    const [hoverDelete, setHoverDelete] = useState(false);
    const handleMouseEnter = () => {
        setHoverDelete(true);
    };
    const handleMouseLeave = () => {
        setHoverDelete(false);
    };

    return (
        <Wrapper {...delegated}>
            <TextInputWrapper
                hoverDelete={hoverDelete}
                value={value}
                onChange={onChange}
            ></TextInputWrapper>
            <DeleteButton
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={clearInput}
            >
                <CloseIconWrapper icon={ICON.close} label="Delete Subtask" />
            </DeleteButton>
        </Wrapper>
    );
};

const Wrapper = styled.li`
    display: flex;
    /* gap: 16px; */
`;

const CloseIconWrapper = styled(Icon)`
    height: 15px;
    width: 15px;
`;

const TextInputWrapper = styled(TextInput)``;

const DeleteButton = styled.button`
    flex-shrink: 0;
    border: none;
    background-color: transparent;
    padding: 0 16px;
    margin-right: -16px;
    border-radius: var(--r-s);

    &:hover {
        // Make button red on hover
        cursor: pointer;
        filter: brightness(0) saturate(100%) invert(40%) sepia(56%)
            saturate(2375%) hue-rotate(333deg) brightness(101%) contrast(84%);
    }
`;

export default DynamicTextInput;
