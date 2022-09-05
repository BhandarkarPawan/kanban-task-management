import styled from "styled-components";
import Heading, { HSIZE } from "../Heading";
import TaskCard from "../TaskCard";

const Column = ({ column, onTaskSelect, ...delegated }) => {
    const numTasks = column.tasks.length;

    return (
        <Wrapper {...delegated}>
            <Title size={HSIZE.S}>
                <Color color={column.color} />
                {column.name} ({numTasks})
            </Title>
            <TaskList>
                {column.tasks.map((task, i) => (
                    <TaskCard onClick={onTaskSelect} key={i} task={task} />
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

const Title = styled(Heading)`
    text-transform: uppercase;
    letter-spacing: 2.4px;
    color: var(--color-gray-300);

    display: flex;
    gap: 12px;
    padding-top: 24px;
    padding-bottom: 18px;
`;

const TaskList = styled.ul`
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

    & > *:first-child {
        // allows border of first card to be fully visible
        margin-top: 2px;
    }
`;

const Color = styled.div`
    background-color: ${(props) => props.color};
    height: 15px;
    width: 15px;
    border-radius: 50%;
`;

export default Column;
