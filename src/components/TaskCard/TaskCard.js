import styled from "styled-components";

const TaskCard = ({ task, onClick }) => {
    const completed = task.subtasks.filter(
        (subtask) => subtask.isCompleted
    ).length;

    return (
        <Wrapper
            onClick={() => {
                onClick(task);
            }}
        >
            <Title onClick={() => onClick(task)}>{task.title}</Title>
            {task.subtasks.length && (
                <Progress>
                    {completed} of {task.subtasks.length} subtasks
                </Progress>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.li`
    border: none;
    text-align: left;

    background-color: ${({ theme }) => theme.backgroundLight};
    color: ${({ theme }) => theme.color};
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: var(--r-l);
    width: 280px;
    padding: 23px 16px;
    scroll-snap-align: start;
    cursor: pointer;

    &:hover,
    &:focus-within {
        // Highlight the card on link focus
        outline: var(--focus-outline);
    }
`;

const Title = styled.button`
    font-size: var(--size-h-m);
    line-height: var(--line-h-m);
    border: none;
    background: transparent;
    padding: 0;
    text-align: left;
    margin: 0;

    // TODO: Move to global button styles
    &:hover,
    &:focus {
        outline: none;
    }
`;

const Progress = styled.div`
    margin-top: 8px;
    font-size: var(--size-b-m);
    line-height: var(--line-b-m);
    color: var(--color-gray-300);
`;

export default TaskCard;
