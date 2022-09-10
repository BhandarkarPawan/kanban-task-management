import { useState } from "react";
import styled from "styled-components";
import Heading, { HSIZE } from "../Heading";

// TODO: Return focus wherever relevant
const SubTask = ({ subtask, id, ...delegated }) => {
    const [checked, setChecked] = useState(subtask.isCompleted);
    const toggleChecked = () => setChecked(!checked);

    return (
        <Wrapper {...delegated}>
            <Checkbox
                id={id}
                type="checkbox"
                checked={checked}
                onChange={toggleChecked}
            ></Checkbox>
            <DummyCheckBox checked={checked} />
            <SubTaskLabel checked={checked} htmlFor={id}>
                <Heading size={HSIZE.S}>{subtask.title}</Heading>
            </SubTaskLabel>
        </Wrapper>
    );
};

// TODO: Allow to click anywhere in the wrapper
const Wrapper = styled.li`
    display: flex;
    gap: 16px;
    align-items: center;
    cursor: pointer;
    padding: 12px;
    background-color: ${({ theme }) => theme.background};

    border-radius: var(--r-s);

    // TODO: Change to focus-visible
    &:focus-within {
        outline: var(--focus-outline);
    }
`;

const SubTaskLabel = styled.label`
    opacity: ${(props) => (props.checked ? 0.5 : 1)};
    text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
    cursor: pointer;
`;

const Checkbox = styled.input`
    position: absolute;
    opacity: 0;
`;

const DummyCheckBox = styled.label`
    height: 16px;
    width: 16px;
    flex-shrink: 0;
    border-radius: var(--r-xs);
    border: ${(props) =>
        props.checked ? "none" : "1px solid var(--color-input-border)"};
    background-color: ${(props) =>
        props.checked ? "var(--color-primary)" : props.theme.backgroundLight};

    background-image: ${(props) =>
        props.checked ? `url("assets/icon-check.svg")` : "none"};
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
`;
export default SubTask;
