import styled from "styled-components";

const TaskCard = ({ task }) => {
    const completed = task.subtasks.filter(
        (subtask) => subtask.isCompleted
    ).length;

    return (
        <Wrapper tabIndex={0} role="button">
            <Title>{task.title}</Title>
            {task.subtasks.length && (
                <Progress>
                    {completed} of {task.subtasks.length} subtasks
                </Progress>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.backgroundLight};
    color: ${({ theme }) => theme.color};
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: var(--r-l);
    width: 280px;
    padding: 23px 16px;
    scroll-snap-align: start;
`;

const Title = styled.div`
    font-size: var(--size-h-m);
    line-height: var(--line-h-m);
`;

const Progress = styled.div`
    margin-top: 8px;
    font-size: var(--size-b-m);
    line-height: var(--line-b-m);
    color: var(--color-gray-300);
`;

export default TaskCard;
