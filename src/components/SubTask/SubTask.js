import styled from "styled-components";

const SubTask = ({ subtask, id }) => {
    return (
        <Wrapper>
            <Checkbox
                id={id}
                type="checkbox"
                checked={subtask.isCompleted}
                onChange={() => {
                    subtask.isCompleted = true;
                }}
            ></Checkbox>
            <DummyCheckBox checked={subtask.isCompleted} />
            <SubTaskLabel checked={subtask.isCompleted} htmlFor={id}>
                {subtask.title}
            </SubTaskLabel>
        </Wrapper>
    );
};

const Wrapper = styled.li`
    display: flex;
    gap: 16px;
    align-items: center;

    padding: 12px;
    background-color: ${({ theme }) => theme.background};

    border-radius: var(--r-s);

    &:focus-within {
        outline: var(--focus-outline);
    }
`;

const SubTaskLabel = styled.label`
    font-size: var(--size-h-s);
    line-height: var(--line-h-s);
    opacity: ${(props) => (props.checked ? 0.5 : 1)};
    text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
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
