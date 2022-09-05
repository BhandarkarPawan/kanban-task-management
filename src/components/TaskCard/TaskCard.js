import styled from "styled-components";
import Heading, { HSIZE } from "../Heading";
import Text, { BSIZE } from "../Text ";

const TaskCard = ({ task, onClick, ...delegated }) => {
    const completed = task.subtasks.filter(
        (subtask) => subtask.isCompleted
    ).length;

    return (
        <Wrapper
            {...delegated}
            onClick={() => {
                onClick(task);
            }}
        >
            <Title onClick={() => onClick(task)}>
                <Heading size={HSIZE.M}>{task.title}</Heading>
            </Title>
            {task.subtasks.length && (
                <Progress size={BSIZE.M}>
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

    // TODO: Switch to focus-visible
    &:focus-within {
        // Highlight the card on link focus
        outline: var(--focus-outline);
    }

    // Prevent card flashing on click
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Title = styled.button`
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

const Progress = styled(Text)`
    margin-top: 8px;
    color: var(--color-gray-300);
`;

export default TaskCard;
