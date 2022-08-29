import styled from "styled-components";
import TaskCard from "../TaskCard";

const Column = ({ column }) => {
    const numTasks = column.tasks.length;

    return (
        <Wrapper>
            <Title>
                <Color color={column.color} />
                {column.name} ({numTasks})
            </Title>
            <TaskList>
                {column.tasks.map((task) => (
                    <TaskCard task={task} />
                ))}
            </TaskList>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    /* flex-shrink: 0; */
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    font-size: var(--size-h-s);
    line-height: var(--line-h-s);
    text-transform: uppercase;
    letter-spacing: 2.4px;
    color: var(--color-gray-300);

    display: flex;
    gap: 12px;
    padding-top: 24px;
    padding-bottom: 20px;
`;

const TaskList = styled.div`
    --pad-v: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    // For an improved scroll experience on mobile
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    scroll-snap-align: start;
    scroll-snap-type: y mandatory;
    scroll-padding: var(--pad-v) 0px;

    &::-webkit-scrollbar {
        display: none;
    }

    padding: 0px 2px var(--pad-v) 2px;
    overflow-y: scroll;
`;

const Color = styled.div`
    background-color: ${(props) => props.color};
    height: 15px;
    width: 15px;
    border-radius: 50%;
`;

export default Column;
